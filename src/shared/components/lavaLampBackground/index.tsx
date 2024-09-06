import { useCallback, useEffect, useRef } from 'react';
import { songModel } from '../../../entities/song/model';
import { CoolestGradientStyled } from './styles';

let curX = 0;
let curY = 0;
let tgX = 0;
let tgY = 0;
// bigger -> more delay of bubble following mouse
const FOLOWING_DELAY_FACTOR = 50;

type Props = {
    colors?: string[];
};

export const LavaLampBackground = ({ colors }: Props) => {
    const interactiveBubbleRef = useRef<HTMLDivElement | null>(null);
    const { currentSong } = songModel.useSong();

    const move = useCallback(() => {
        curX += (tgX - curX) / FOLOWING_DELAY_FACTOR;
        curY += (tgY - curY) / FOLOWING_DELAY_FACTOR;

        if (interactiveBubbleRef.current) {
            interactiveBubbleRef.current.style.transform = `translate(${curX}px, ${curY}px)`;
        }

        requestAnimationFrame(() => move());
    }, []);

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        tgX = event.clientX;
        tgY = event.clientY;
    };

    useEffect(() => {
        move();
    }, [move]);

    return (
        <CoolestGradientStyled
            $colors={colors ?? currentSong?.imageColors ?? []}
            onMouseMove={handleMouseMove}
        >
            <div className="noise-layer"></div>
            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive" ref={interactiveBubbleRef}></div>
            </div>
        </CoolestGradientStyled>
    );
};
