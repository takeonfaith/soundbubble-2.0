import {
    IconChartBubble,
    IconMessage2,
    IconMusic,
    IconPlaylist,
    IconSparkles,
    IconUsers,
    IconVinyl,
    IconWaveSine,
} from '@tabler/icons-react';
import { DefaultButton } from '../../../shared/components/button/DefaultButton';
import { Flex } from '../../../shared/components/flex';
import { Subtext } from '../../../shared/components/subtext';
import backgroundImg from '../../signUpModal/img/background.png';
import { FirstScreenStyled, Icons } from './styles';
import { modalModel } from '../../../layout/modal/model';
import { SecondScreen } from './SecondScreen';
import { ONBOARDING_KEY } from '../constants';
import { translate } from '../../../i18n';

export const FirstScreen = () => {
    const icons = [
        <IconPlaylist />,
        <IconVinyl />,
        <IconMusic />,
        <IconMessage2 />,
        <IconWaveSine />,
        <IconSparkles />,
        <IconUsers />,
        <IconChartBubble />,
    ];

    return (
        <FirstScreenStyled>
            <img src={backgroundImg} className="background" alt="" />
            <div className="bokeh"></div>
            <Flex d="column" gap={60} height="100%">
                <Flex d="column" gap={10}>
                    <Icons>
                        {icons.map((icon) => {
                            return <div>{icon}</div>;
                        })}
                        {icons.map((icon) => {
                            return <div>{icon}</div>;
                        })}
                    </Icons>
                    <Icons className="shifted">
                        {icons.map((icon) => {
                            return <div>{icon}</div>;
                        })}
                        {icons.map((icon) => {
                            return <div>{icon}</div>;
                        })}
                    </Icons>
                </Flex>
                <Flex jc="center" d="column" gap={10}>
                    <h2>We glad you joined us!</h2>
                    <Subtext>
                        You can learn what features are available or skip this
                        tutorial
                    </Subtext>
                </Flex>
            </Flex>
            <Flex width="100%" gap={10}>
                <DefaultButton
                    appearance="outline"
                    onClick={() => {
                        modalModel.events.close();
                        localStorage.setItem(ONBOARDING_KEY, 'true');
                    }}
                >
                    Skip
                </DefaultButton>
                <DefaultButton
                    onClick={() =>
                        modalModel.events.open({
                            title: '',
                            content: <SecondScreen />,
                        })
                    }
                    appearance="primary"
                >
                    {translate('next')}
                </DefaultButton>
            </Flex>
        </FirstScreenStyled>
    );
};
