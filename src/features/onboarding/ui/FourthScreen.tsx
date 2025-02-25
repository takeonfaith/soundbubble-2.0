import { styled } from 'styled-components';
import { translate } from '../../../i18n';
import { modalModel } from '../../../layout/modal/model';
import { DefaultButton } from '../../../shared/components/button/DefaultButton';
import { Flex } from '../../../shared/components/flex';
import { Subtext } from '../../../shared/components/subtext';
import backgroundImg from '../../signUpModal/img/background.png';
import { FifthScreen } from './FifthScreen';
import { FirstScreenStyled } from './styles';
import { IconRepeatSegment } from '../../../shared/icons/IconRepeatSegment';

const FourthScreenStyled = styled(FirstScreenStyled)`
    img.background1 {
        filter: hue-rotate(20deg);
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

    svg,
    img {
        width: 70px;
        height: 70px;
    }
`;

export const FourthScreen = () => {
    return (
        <FourthScreenStyled>
            <div className="bokeh" />
            <img src={backgroundImg} className="background1" alt="" />

            <Flex height="100%">
                <Icon>
                    <IconRepeatSegment />
                </Icon>
            </Flex>
            <Flex height="300px" d="column" gap={10}>
                <h2>{translate('repeat_segment_promo')}</h2>
                <Subtext>{translate('repeat_segment_promo_subtext')}</Subtext>
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
                        modalModel.events.open({
                            content: <FifthScreen />,
                            title: '',
                        });
                    }}
                    appearance="primary"
                >
                    {translate('next')}
                </DefaultButton>
            </Flex>
        </FourthScreenStyled>
    );
};
