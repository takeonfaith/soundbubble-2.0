import React from 'react';
import { SkeletonSection } from './styles';

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
    ...props
}: Props) => {
    return (
        <>
            <SkeletonSection {...props} className={loading ? 'loading' : ''}>
                {skeleton}
            </SkeletonSection>
            {children}
        </>
    );
};
