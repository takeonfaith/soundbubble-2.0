import { IconSparkles } from '@tabler/icons-react';
import styled from 'styled-components';
import { Button } from '../../shared/components/button';
import { CoolestGradientStyled } from '../../shared/components/lavaLampBackground/styles';

const AddButtonStyled = styled(Button)`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    position: fixed;
    bottom: calc(var(--player-size) + 60px);
    right: 60px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-size: 200% 200%;
    overflow: hidden;
    box-shadow: ${({theme})=>theme.colors.shadow2};

    svg {
        stroke-width: 2;
        width: 30px;
        height: 30px;
        position: absolute;
        inset: 50%;
        transform: translate(-50%, -50%);
    }

    @media (max-width: 1000px) {
        bottom: calc(var(--player-size) + 70px);
        right: 15px;
        width: 50px;
        height: 50px;

        svg {
            width: 28px;
            height: 28px;
        }
    }
`;

export const AddButton = () => {
    return (
        <AddButtonStyled>
            <CoolestGradientStyled
                $colors={[
                    '#7352ce',
                    '#5265ce',
                    '#a952ce',
                    '#52b7ce',
                    '#5452ce',
                    '#8852ce',
                ]}
            />
            <IconSparkles />
        </AddButtonStyled>
    );
};
