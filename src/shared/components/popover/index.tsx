import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { SHIFT } from './constants';
import { PopoverContainer, TargetElement } from './styles';

interface PopoverProps {
    content: React.ReactNode;
    children: React.ReactNode;
    shift?: number;
    position?: 'top' | 'right' | 'bottom' | 'left';
}

const Popover: React.FC<PopoverProps> = ({
    content,
    children,
    shift = SHIFT,
    position = 'top',
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);

    if (!children) return null;

    const getPopoverStyle = (): React.CSSProperties => {
        if (!targetRef.current) return {};

        const targetRect = targetRef.current.getBoundingClientRect();

        const positions: Record<string, React.CSSProperties> = {
            top: {
                left: targetRect.left + targetRect.width / 2,
                top: targetRect.top - shift,
                transform: 'translate(-50%, -100%)',
            },
            right: {
                left: targetRect.right + shift,
                top: targetRect.top + targetRect.height / 2,
                transform: 'translateY(-50%)',
            },
            bottom: {
                left: targetRect.left + targetRect.width / 2,
                top: targetRect.bottom + shift,
                transform: 'translate(-50%, 0)',
            },
            left: {
                left: targetRect.left - shift,
                top: targetRect.top + targetRect.height / 2,
                transform: 'translate(-100%, -50%)',
            },
        };

        return positions[position] || positions['bottom'];
    };

    return (
        <>
            <TargetElement
                ref={targetRef}
                onMouseLeave={() => setIsVisible(false)}
                onMouseEnter={() => setIsVisible(true)}
                onFocus={() => setIsVisible(true)}
                onBlur={() => setIsVisible(false)}
            >
                {children}
            </TargetElement>
            {content &&
                isVisible &&
                ReactDOM.createPortal(
                    <PopoverContainer
                        ref={popoverRef}
                        isVisible={isVisible}
                        style={getPopoverStyle()}
                    >
                        {content}
                    </PopoverContainer>,
                    document.body // Render in the body element
                )}
        </>
    );
};

export default Popover;
