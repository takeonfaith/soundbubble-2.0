import React, { useEffect, useRef, useState } from 'react';

type Props = {
    children: React.ReactNode;
};

export const useScrollList = ({ children }: Props) => {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);
    const scrollElementRef = useRef<HTMLDivElement>(null);
    const className = `${showLeftArrow ? 'showLeft' : ''} ${
        showRightArrow ? 'showRight' : ''
    }`;

    useEffect(() => {
        if (scrollElementRef.current?.clientWidth) {
            setShowLeftArrow(scrollPos !== 0);

            setShowRightArrow(
                scrollPos + scrollElementRef.current.clientWidth + 1 <
                    scrollElementRef.current.scrollWidth
            );
        }
    }, [scrollPos, children, scrollElementRef.current?.scrollWidth]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        setScrollPos(e.currentTarget.scrollLeft);
    };

    const handleScrollLeft = () => {
        if (scrollElementRef.current?.scrollLeft !== undefined) {
            scrollElementRef.current.scrollLeft =
                scrollPos - scrollElementRef.current.scrollWidth / 3;
        }
    };

    const handleScrollRight = () => {
        if (scrollElementRef.current?.scrollLeft !== undefined) {
            scrollElementRef.current.scrollLeft =
                scrollPos + scrollElementRef.current.scrollWidth / 3;
        }
    };

    return {
        showLeftArrow,
        showRightArrow,
        scrollElementRef,
        className,
        handleScroll,
        handleScrollLeft,
        handleScrollRight,
    };
};
