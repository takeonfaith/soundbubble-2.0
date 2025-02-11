import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import React from 'react';
import { ArrowButton, HorizontalListStyled, ListWrapper } from './styles';
import { useScrollList } from './useScrollList';

type Props = {
    children: React.ReactNode;
    overflowColor?: string;
};

export const HorizontalList = ({ children, overflowColor }: Props) => {
    const {
        showArrows,
        className,
        showLeftArrow,
        showRightArrow,
        scrollElementRef,
        handleScroll,
        handleScrollLeft,
        handleScrollRight,
    } = useScrollList({ children });

    return (
        <ListWrapper className={className} $overflowColor={overflowColor}>
            {showArrows && (
                <ArrowButton
                    disabled={!showLeftArrow}
                    className="left"
                    onClick={handleScrollLeft}
                >
                    <IconChevronLeft />
                </ArrowButton>
            )}
            <HorizontalListStyled
                className="horizontal-list"
                ref={scrollElementRef}
                onScroll={handleScroll}
            >
                {children}
            </HorizontalListStyled>
            {showArrows && (
                <ArrowButton
                    disabled={!showRightArrow}
                    className="right"
                    onClick={handleScrollRight}
                >
                    <IconChevronRight />
                </ArrowButton>
            )}
        </ListWrapper>
    );
};
