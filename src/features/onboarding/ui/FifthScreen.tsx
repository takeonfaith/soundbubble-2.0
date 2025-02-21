import { styled } from 'styled-components';
import { modalModel } from '../../../layout/modal/model';
import { DefaultButton } from '../../../shared/components/button/DefaultButton';
import { Flex } from '../../../shared/components/flex';
import backgroundImg from '../../signUpModal/img/background.png';
import { FirstScreenStyled } from './styles';
import { Subtext } from '../../../shared/components/subtext';
import { IconWaveSine } from '@tabler/icons-react';
import { ONBOARDING_KEY } from '../constants';
import { translate } from '../../../i18n';

const FourthScreenStyled = styled(FirstScreenStyled)`
    img.background1 {
        filter: hue-rotate(320deg);
        width: 400px;
        height: 300px;
    }
`;

const Icon = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    animation: iconAppear 3s forwards;

    @keyframes iconAppear {
        0% {
            transform: scale(0.8);
            opacity: 0;
            filter: blur(10px);
        }
        50% {
            transform: scale(1.1);
            opacity: 1;
            filter: blur(0px);
        }
        100% {
            transform: scale(1);
            opacity: 1;
            filter: blur(0px);
        }
    }

    svg {
        width: 70px;
        height: 70px;
    }
`;

export const FifthScreen = () => {
    return (
        <FourthScreenStyled>
            <div className="bokeh" />
            <img src={backgroundImg} className="background1" alt="" />
            <Flex height="100%">
                <Icon>
                    <IconWaveSine />
                </Icon>
            </Flex>
            <Flex height="300px" d="column" gap={10}>
                <h2>{translate('wave_promo')}</h2>
                <Subtext>
                    {translate('wave_promo_subtext')}
                </Subtext>
            </Flex>
            <Flex width="100%" gap={10}>
                <DefaultButton
                    appearance="outline"
                    onClick={() => {
                        modalModel.events.back();
                    }}
                >
                    {translate('back')}
                </DefaultButton>
                <DefaultButton
                    onClick={() => {
                        modalModel.events.close();
                        localStorage.setItem(ONBOARDING_KEY, 'true');
                    }}
                    appearance="primary"
                >
                    {translate('done')}
                </DefaultButton>
            </Flex>
        </FourthScreenStyled>
    );
};
