import { Loading } from '@components/loading';
import styled from 'styled-components';
import { Button } from '.';

type ButtonAppearance = 'primary' | 'secondary' | 'outline';

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
    appearance = 'outline',
    disabled,
    width,
    ...restProps
}: Props) => {
    return (
        <Button
            disabled={disabled || loading}
            $width={width}
            color={appearance === 'primary' ? '#fff' : ''}
            className={`${restProps.className} ${appearance}`}
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
