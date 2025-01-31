import { useEffect, useRef } from 'react';
import { hexToRgbA } from '../../shared/funcs/hexToRgba';
import { Browsers, getBrowserName } from '../../shared/funcs/getBrowserName';

const browserName = getBrowserName();

interface Bubble {
    radius: number;
    targetRadius: number; // Target size used for smooth transitions
    angle: number;
    distance: number;
    dx: number;
    dy: number;
    originalRadius: number; // To remember the base size for beat reaction
    color: string;
}

type Props = {
    colors?: string[];
    analyser: AnalyserNode | null;
    audioData: Uint8Array | null;
};

const lerp = (a: number, b: number, t: number): number => a + (b - a) * t; // Linear interpolation

const avg = (arr: number[]) => {
    return (
        arr.reduce((acc, el) => {
            acc += el;
            return acc;
        }, 0) / arr.length
    );
};

const updateBubble = (bubble: Bubble, beatStrength: number, color?: string) => {
    bubble.targetRadius =
        bubble.originalRadius + 300 * Math.pow(beatStrength, 10); // Stronger beat = larger size

    // Smoothly interpolate the current radius towards the target size
    bubble.radius = lerp(bubble.radius, bubble.targetRadius, 0.03); // Adjust interpolation speed (0.1) // Adjust interpolation speed (0.1)

    // Orbit and wobble motion
    bubble.angle += bubble.dx;
    bubble.distance += bubble.dy;
    if (color && bubble.color !== color) {
        bubble.color = `rgba(${hexToRgbA(color)}, ${0.8})`;
    }

    // Restrict the wobble's range
    if (bubble.distance < 100 || bubble.distance > 300) bubble.dy *= -1;
};

const drawBubble = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    bubble: Bubble
) => {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.save();
    if (browserName !== Browsers.Safari) {
        ctx.filter = 'blur(100px)';
    }
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

export const MeshGradientBubblesWithAudio = ({
    colors,
    analyser,
    audioData,
}: Props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

        const bubbles: Bubble[] = [];
        const numBubbles = 6;
        let animationId: number;

        // Random helper: Get a random number between min and max
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
            const radius = random(100, 250); // Base bubble size
            bubbles.push({
                radius,
                targetRadius: radius, // Initially, target size equals base size
                originalRadius: radius,
                angle: random(0, Math.PI * 2),
                distance: random(0, 600), // Distance from the center
                dx: random(-0.004, 0.005), // Angular velocity
                dy: random(-0.05, 0.05), // Random wobble
                color: getRandomBlueOrPurple(),
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // ctx.globalCompositeOperation = 'difference'

            let beatStrength = 0;

            // Analyze audio data and calculate beat strength
            if (audioData && analyser) {
                analyser.getByteFrequencyData(audioData); // Get frequency spectrum

                const bassValues = Array.from(audioData.slice(0, 10)); // Focus on the bass frequencies
                beatStrength = avg(bassValues) / 255; // Normalize beat strength between 0 and 1
            }

            // Update and draw each bubble
            bubbles.forEach((bubble, index) => {
                updateBubble(bubble, beatStrength, colors?.[index % 3]);
                drawBubble(canvas, ctx, bubble);
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

    return (
        <div
            style={{
                height: '100%',
                overflow: 'hidden',
                background: `linear-gradient(180deg,${
                    colors?.[0] ?? '#4f35b66d'
                }, transparent)`,
            }}
            className="mesh-gradient"
        >
            {browserName !== Browsers.Safari && (
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
                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -4"
                                result="goo"
                            />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
            )}
            <canvas
                ref={canvasRef}
                style={{
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    filter:
                        browserName !== Browsers.Safari
                            ? 'url(#goo)'
                            : 'blur(50px)',
                }}
            />
        </div>
    );
};
