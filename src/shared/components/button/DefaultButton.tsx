import { Loading } from '@components/loading';
import styled, { useTheme } from 'styled-components';
import { Button } from '.';

type ButtonAppearance = 'primary' | 'secondary' | 'ghost';

const AnimationWrapper = styled.div`
    transition: 0.2s transform, 0.2s opacity;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top left;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;

    &.show {
        opacity: 1;
        visibility: visible;
        transform: scale(1) translate(-50%, -50%);
    }

    &.hide {
        opacity: 0;
        visibility: hidden;
        transform: scale(0.9) translate(-50%, -50%);
    }
`;

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
    appearance?: ButtonAppearance;
    width?: string;
};

export const DefaultButton = ({
    loading,
    children,
    appearance = 'ghost',
    disabled,
    width,
    ...restProps
}: Props) => {
    const theme = useTheme();
    const backgrounds: Record<ButtonAppearance, string> = {
        primary: theme.colors.blue.action,
        secondary: theme.colors.hover,
        ghost: 'transparent',
    };

    return (
        <Button
            disabled={disabled || loading}
            $background={backgrounds[appearance]}
            $width={width}
            color={appearance === 'primary' ? '#fff' : ''}
            {...restProps}
        >
            <AnimationWrapper className={loading ? 'show' : 'hide'}>
                <Loading />
            </AnimationWrapper>
            <AnimationWrapper className={!loading ? 'show' : 'hide'}>
                {children}
            </AnimationWrapper>
        </Button>
    );
};
