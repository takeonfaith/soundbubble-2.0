import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import React, { useRef, useState } from 'react';
import { ArrowButton, HorizontalListStyled, ListWrapper } from './styles';

type Props = {
    children: React.ReactNode;
};

export const HorizontalList = ({ children }: Props) => {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);

    const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        setShowLeftArrow(e.currentTarget.scrollLeft !== 0);

        setShowRightArrow(
            e.currentTarget.scrollLeft + e.currentTarget.clientWidth <
                e.currentTarget.scrollWidth
        );

        setScrollPos(e.currentTarget.scrollLeft);
    };

    const handleScrollLeft = () => {
        if (elementRef.current?.scrollLeft !== undefined) {
            elementRef.current.scrollLeft =
                scrollPos - elementRef.current.scrollWidth / 3;
        }
    };

    const handleScrollRight = () => {
        if (elementRef.current?.scrollLeft !== undefined) {
            elementRef.current.scrollLeft =
                scrollPos + elementRef.current.scrollWidth / 3;
        }
    };

    return (
        <ListWrapper
            className={`${showLeftArrow ? 'showLeft' : ''} ${
                showRightArrow ? 'showRight' : ''
            }`}
        >
            <ArrowButton className="left" onClick={handleScrollLeft}>
                <IconArrowLeft />
            </ArrowButton>
            <HorizontalListStyled ref={elementRef} onScroll={handleScroll}>
                {children}
            </HorizontalListStyled>
            <ArrowButton className="right" onClick={handleScrollRight}>
                <IconArrowRight />
            </ArrowButton>
        </ListWrapper>
    );
};
