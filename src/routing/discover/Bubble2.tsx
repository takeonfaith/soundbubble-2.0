import React, { useEffect, useRef, useState } from 'react';
import { hexToHsl } from '../../shared/funcs/hexToHsl';

interface Bubble {
    radius: number;
    targetRadius: number; // Target size used for smooth transitions
    angle: number;
    distance: number;
    dx: number;
    dy: number;
    originalRadius: number; // To remember the base size for beat reaction
    color: string;
    targetColor: string;
}

const numBubbles = 6; // Random helper: Get a random number between min and max
const bubbles: Bubble[] = [];

export const MeshGradientBubblesWithAudio: React.FC<{
    colors?: string[];
}> = ({ colors }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null); // Reference for audio element
    const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
    const [audioData, setAudioData] = useState<Uint8Array | null>(null);

    useEffect(() => {
        const random = (min: number, max: number): number =>
            Math.random() * (max - min) + min;

        // Helper: Generate random shades of blue or purple
        const getRandomBlueOrPurple = (): string => {
            const hue = random(200, 300); // Blue to purple range
            const saturation = random(50, 70); // Saturation for vibrant colors
            const lightness = random(50, 60); // Lightness for balanced contrast
            return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        };

        // Initialize bubbles
        for (let i = 0; i < numBubbles; i++) {
            const radius = random(120, 220); // Base bubble size
            const color = getRandomBlueOrPurple();
            bubbles.push({
                radius,
                targetRadius: radius, // Initially, target size equals base size
                originalRadius: radius,
                angle: random(0, Math.PI * 2),
                distance: random(0, 600), // Distance from the center
                dx: random(-0.004, 0.005), // Angular velocity
                dy: random(-0.05, 0.05), // Random wobble
                color,
                targetColor: color, // Initially, target size equals base size
            });
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        // Resize canvas to match the window size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let animationId: number;

        const lerp = (a: number, b: number, t: number): number =>
            a + (b - a) * t; // Linear interpolation

        const drawBubble = (bubble: Bubble) => {
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            ctx.save();
            ctx.filter = 'blur(100px)';
            ctx.globalAlpha = 0.8;
            ctx.fillStyle = bubble.color;
            ctx.beginPath();
            ctx.arc(
                centerX + bubble.distance * Math.cos(bubble.angle), // X coordinate based on orbit
                centerY + bubble.distance * Math.sin(bubble.angle), // Y coordinate based on orbit
                bubble.radius, // Current radius (interpolated size)
                0,
                Math.PI * 2
            );
            ctx.fill();
            ctx.closePath();
            ctx.restore();
        };

        const updateBubble = (
            bubble: Bubble,
            beatStrength: number,
            color?: string
        ) => {
            bubble.targetRadius = bubble.originalRadius + 150 * beatStrength; // Stronger beat = larger size

            // Smoothly interpolate the current radius towards the target size
            bubble.radius = lerp(bubble.radius, bubble.targetRadius, 0.05); // Adjust interpolation speed (0.1) // Adjust interpolation speed (0.1)

            // Orbit and wobble motion
            bubble.angle += bubble.dx;
            bubble.distance += bubble.dy;

            if (color) {
                const { h, s, l } = hexToHsl(color);
                if (bubble.color !== `hsl(${h}, ${s}%, ${l}%)`) {
                    const get = (hslStr: string) => {
                        return hslStr
                            .replace('hsl(', '')
                            .replace(')', '')
                            .replace(/%/g, '')
                            .split(',')
                            .map((x) => (isNaN(+x) ? 0 : +x));
                    };

                    const newH = lerp(get(bubble.color)[0], h, 0.4);
                    const newS = lerp(get(bubble.color)[1], s, 0.1);
                    const newL = lerp(get(bubble.color)[2], l, 0.1);
                    bubble.color = `hsl(${newH}, ${newS}%, ${newL}%)`;
                }
            }

            // Restrict the wobble's range
            if (bubble.distance < 100 || bubble.distance > 300) bubble.dy *= -1;
        };

        const arr: number[] = [];

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            let beatStrength = 0;

            // Analyze audio data and calculate beat strength
            if (audioData && analyser) {
                analyser.getByteFrequencyData(audioData); // Get frequency spectrum

                const bassValues = Array.from(audioData.slice(0, 10)); // Focus on the bass frequencies
                beatStrength = Math.min(...bassValues) / 255; // Normalize beat strength between 0 and 1
            }

            arr.push(beatStrength);

            // Update and draw each bubble
            bubbles.forEach((bubble, index) => {
                updateBubble(bubble, beatStrength, colors?.[index % 3]);
                drawBubble(bubble);
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, [audioData, analyser, colors]);

    // Handle file input for audio playback
    const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const audio = audioRef.current as HTMLAudioElement;
            audio.src = URL.createObjectURL(file);
            audio.play();

            // Set up Web Audio API
            const audioCtx = new AudioContext();
            const analyserNode = audioCtx.createAnalyser();
            const source = audioCtx.createMediaElementSource(audio);

            source.connect(analyserNode);
            analyserNode.connect(audioCtx.destination);

            analyserNode.fftSize = 256; // Lower size for faster analysis
            const dataArray = new Uint8Array(analyserNode.frequencyBinCount);

            setAnalyser(analyserNode);
            setAudioData(dataArray);
        }
    };

    return (
        <div>
            {/* File input for user audio */}
            <input
                type="file"
                accept="audio/*"
                onChange={handleAudioUpload}
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    zIndex: 10,
                    background: '#fff',
                    padding: '5px',
                    borderRadius: '5px',
                }}
            />
            {/* Canvas for rendering */}
            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="120"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -5"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <canvas
                ref={canvasRef}
                style={{
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    filter: 'url(#goo)',
                }}
            />
            <audio ref={audioRef} />
        </div>
    );
};
