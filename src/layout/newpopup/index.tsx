import React, {
    useCallback,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import ReactDOM from 'react-dom';
import { useClickOutside } from '../../shared/hooks/useClickOutside';
import { ANIMATION_DURATION, DELAY, INITIAL_SCALE } from './constants';
import { calculatePosition } from './lib/calculatePosition';
import { PopupContainer } from './styles';
import { PopupPosition, TTrigger } from './types';

type Props = {
    position?: PopupPosition;
    children: React.ReactNode;
    content: React.ReactNode;
    triggers?: TTrigger[];
};

export const Popup = ({
    position,
    children,
    content,
    triggers = ['click'],
}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [coords, setCoords] = useState({
        top: 0,
        left: 0,
        transformOrigin: '',
    });
    const popupRef = useRef<HTMLDivElement | null>(null);
    const anchorRef = useRef<HTMLDivElement | null>(null);
    const timeout = useRef<NodeJS.Timeout | null>(null);
    const delayTimeout = useRef<NodeJS.Timeout | null>(null);
    const closeDelay = triggers.includes('hover') ? DELAY : 0;
    const isDisabled = useMemo(
        () =>
            React.Children.toArray(children).some((child: React.ReactNode) =>
                typeof child === 'object' && child !== null && 'props' in child
                    ? child?.props.disabled
                    : false
            ),
        [children]
    );

    const handleOpen = () => {
        if (!isDisabled) {
            setIsOpen(true);
            setIsVisible(true);
            if (delayTimeout.current) {
                clearTimeout(delayTimeout.current);
            }

            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        }
    };

    const handleClose = useCallback(() => {
        if (!isDisabled) {
            if (closeDelay) {
                delayTimeout.current = setTimeout(() => {
                    setIsVisible(false);
                }, closeDelay);
            } else {
                setIsVisible(false);
            }

            timeout.current = setTimeout(() => {
                setIsOpen(false);
            }, ANIMATION_DURATION + closeDelay);
        }
    }, [closeDelay, isDisabled]);

    // Вычисляем координаты попапа
    useLayoutEffect(() => {
        if (isOpen && anchorRef.current && content && !isDisabled) {
            const { width, height, x, y } =
                anchorRef.current.getBoundingClientRect();
            const popUpValues = popupRef.current?.getBoundingClientRect() ?? {
                width: 0,
                height: 0,
                x: 0,
                y: 0,
            };
            console.log(x, y);

            const { posX, posY, origin } = calculatePosition(
                x,
                y,
                width,
                height,
                popUpValues.width / INITIAL_SCALE,
                popUpValues.height / INITIAL_SCALE,
                position,
                !triggers.includes('hover')
            );

            setCoords({
                top: posY,
                left: posX,
                transformOrigin: origin,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, anchorRef, position, popupRef, isDisabled]);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            console.log('scroll');

            handleClose();
        });
    }, [handleClose]);

    useClickOutside(popupRef, () => handleClose());

    if (!content) return children;

    return (
        <>
            <div
                ref={anchorRef}
                onClick={(e) => {
                    if (triggers.includes('click')) {
                        e.stopPropagation();
                        if (isOpen) {
                            handleClose();
                        } else {
                            handleOpen();
                        }
                    }
                }}
                onMouseEnter={() => {
                    if (triggers.includes('hover')) handleOpen();
                }}
                onMouseLeave={() => {
                    if (triggers.includes('hover')) handleClose();
                }}
            >
                {children}
            </div>
            {isOpen &&
                content &&
                ReactDOM.createPortal(
                    <>
                        <PopupContainer
                            onClick={(e) => e.stopPropagation()}
                            $closeDelay={closeDelay}
                            className={`${isVisible ? '' : 'hidden'}`}
                            ref={popupRef}
                            $coords={coords}
                            onMouseEnter={() => {
                                if (triggers.includes('hover')) handleOpen();
                            }}
                            onMouseLeave={() => {
                                if (triggers.includes('hover')) handleClose();
                            }}
                        >
                            {content}
                        </PopupContainer>
                    </>,
                    document.body
                )}
        </>
    );
};
