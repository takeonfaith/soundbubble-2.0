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
import { useState } from 'react';
import { DefaultButton } from '../../../shared/components/button/DefaultButton';
import { Flex } from '../../../shared/components/flex';
import { Subtext } from '../../../shared/components/subtext';
import { useEffectOnce } from '../../../shared/hooks/useEffectOnce';
import backgroundImg from '../../signUpModal/img/background.png';
import { FirstScreenStyled, Icons } from './styles';

export const FirstScreen = () => {
    const [random1, setRandom1] = useState(0);
    const [random2, setRandom2] = useState(0);
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

    useEffectOnce(() => {
        setInterval(() => {
            setRandom1(Math.floor(Math.random() * 23));
            setRandom2(Math.floor(Math.random() * 23));
        }, 500);
    }, []);

    console.log(random1);

    return (
        <FirstScreenStyled>
            <img src={backgroundImg} className="background" alt="" />

            <Flex d="column" gap={60} height="100%">
                <Flex d="column" gap={10}>
                    <Icons>
                        {icons.map((icon, index) => {
                            return (
                                <div
                                    className={
                                        index === random1 ? 'current' : ''
                                    }
                                >
                                    {icon}
                                </div>
                            );
                        })}
                        {icons.map((icon, index) => {
                            return (
                                <div
                                    className={
                                        index + icons.length === random1
                                            ? 'current'
                                            : ''
                                    }
                                >
                                    {icon}
                                </div>
                            );
                        })}
                    </Icons>
                    <Icons className="shifted">
                        {icons.map((icon, index) => {
                            return (
                                <div
                                    className={
                                        index === random2 ? 'current' : ''
                                    }
                                >
                                    {icon}
                                </div>
                            );
                        })}
                        {icons.map((icon, index) => {
                            return (
                                <div
                                    className={
                                        index + icons.length === random2
                                            ? 'current'
                                            : ''
                                    }
                                >
                                    {icon}
                                </div>
                            );
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
                <DefaultButton appearance="secondary">Skip</DefaultButton>
                <DefaultButton appearance="primary">Next</DefaultButton>
            </Flex>
        </FirstScreenStyled>
    );
};
