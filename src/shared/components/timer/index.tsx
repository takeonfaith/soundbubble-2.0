import { useEffect, useRef, useState } from 'react';
import {
    BackgroundCircle,
    CircleContainer,
    ProgressCircle,
    TimeLabel,
    TimerContainer,
} from './styles';

type Props = {
    duration: number;
    format: 'seconds' | 'time';
    isGoing: boolean;
    size?: number;
    children?: React.ReactNode;
};

export const Timer = ({ duration, isGoing, children, size = 40 }: Props) => {
    const [timeLeft, setTimeLeft] = useState<number>(duration);
    const interval = useRef<NodeJS.Timeout>();
    const dasharray = Math.PI * 2 * size;

    useEffect(() => {
        if (isGoing) {
            if (timeLeft >= 0) {
                interval.current = setInterval(() => {
                    setTimeLeft((prevTime) =>
                        prevTime > 0 ? prevTime - 1 : 0
                    );
                }, 1000);
            }
        } else {
            setTimeLeft(duration);
            clearInterval(interval.current);
        }

        return () => clearInterval(interval.current);
    }, [timeLeft, isGoing, duration]);

    const calculateProgress = (): number => {
        return dasharray - (dasharray * (timeLeft / duration) * 100) / 100;
    };

    return (
        <TimerContainer>
            <CircleContainer size={size}>
                <BackgroundCircle
                    size={size}
                    cx={size * 1.5}
                    cy={size * 1.5}
                    r={size}
                />
                <ProgressCircle
                    size={size}
                    cx={size * 1.5}
                    cy={size * 1.5}
                    r={size}
                    dasharray={dasharray}
                    progress={calculateProgress()}
                    className="progress-circle"
                />
            </CircleContainer>
            <TimeLabel size={size}>{children ?? timeLeft}</TimeLabel>
        </TimerContainer>
    );
};
