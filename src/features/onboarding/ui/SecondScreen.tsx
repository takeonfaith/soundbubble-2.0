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
import { translate } from '../../../i18n';

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
                        {translate('slow_version')}
                    </Flex>
                    <SwitchToggle
                        onChange={() => null}
                        checked={toggled}
                        size="s"
                    />
                </IconStyled>
                <Flex d="column" width="100%" gap={10}>
                    <h2>{translate('slow_version_every_song')}</h2>
                    <Subtext>
                        {translate('slow_version_every_song_subtext')}
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
                    {translate('back')}
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
                    {translate('next')}
                </DefaultButton>
            </Flex>
        </FirstScreenStyled>
    );
};
