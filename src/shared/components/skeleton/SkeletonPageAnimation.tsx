import React from 'react';
import {
    SkeletonPageAnimationStyled,
    SkeletonSection,
    ContentSection,
} from './styles';

type Props = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    children: React.ReactNode;
    skeleton: React.ReactNode;
    loading: boolean;
    color?: string;
    background?: string;
};

export const SkeletonPageAnimation = ({
    loading,
    children,
    skeleton,
    background,
    ...props
}: Props) => {
    return (
        <SkeletonPageAnimationStyled
            {...props}
            className={!loading ? 'loaded' : ''}
        >
            <SkeletonSection
                $background={background}
                className={loading ? 'loading' : ''}
            >
                {skeleton}
            </SkeletonSection>
            <ContentSection className={loading ? 'loading' : ''}>
                {children}
            </ContentSection>
        </SkeletonPageAnimationStyled>
    );
};
