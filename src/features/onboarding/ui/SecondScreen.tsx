import { IconSparkles, IconStarFilled } from '@tabler/icons-react';
import { useState } from 'react';
import { Flex } from '../../../shared/components/flex';
import { SwitchToggle } from '../../../shared/components/switchToggle';
import { useEffectOnce } from '../../../shared/hooks/useEffectOnce';
import { Particles } from '../../loginModal/Particles';
import { FirstScreenStyled, IconStyled } from './styles';
import { Subtext } from '../../../shared/components/subtext';
import { modalModel } from '../../../layout/modal/model';
import { DefaultButton } from '../../../shared/components/button/DefaultButton';
import backgroundImg from '../../signUpModal/img/background.png';
import { ThirdScreen } from './ThirdScreen';

export const SecondScreen = () => {
    const [toggled, setToggled] = useState(false);

    useEffectOnce(() => {
        setTimeout(() => {
            setToggled(true);
        }, 600);
    }, []);

    return (
        <FirstScreenStyled>
            <div className="bokeh" />
            <img
                src={backgroundImg}
                style={{ opacity: Number(toggled) }}
                className="background1"
                alt=""
            />

            <Flex d="column" gap={60} padding="80px 0">
                {toggled && (
                    <Particles
                        quantity={20}
                        particle={<IconStarFilled className="particle" />}
                    />
                )}
                <IconStyled className={toggled ? 'toggled' : ''}>
                    <Flex gap={10}>
                        <IconSparkles />
                        Slow version
                    </Flex>
                    <SwitchToggle
                        onChange={() => null}
                        checked={toggled}
                        size="s"
                    />
                </IconStyled>
                <Flex d="column" gap={10}>
                    <h2>Slow version of every song!</h2>
                    <Subtext>
                        Just hit one button and enjoy new sound never heard
                        before
                    </Subtext>
                </Flex>
            </Flex>
            <Flex width="100%" gap={10}>
                <DefaultButton
                    appearance="outline"
                    onClick={() => {
                        modalModel.events.back();
                    }}
                >
                    Back
                </DefaultButton>
                <DefaultButton
                    onClick={() =>
                        modalModel.events.open({
                            title: '',
                            content: <ThirdScreen />,
                        })
                    }
                    appearance="primary"
                >
                    Next
                </DefaultButton>
            </Flex>
        </FirstScreenStyled>
    );
};
