import { useState } from 'react';
import { SongCover } from '../../../entities/song/ui/SongCover';
import { userModel } from '../../../entities/user/model';
import { UserCover } from '../../../entities/user/ui/UserCover';
import { modalModel } from '../../../layout/modal/model';
import { DefaultButton } from '../../../shared/components/button/DefaultButton';
import { Flex } from '../../../shared/components/flex';
import { Subtext } from '../../../shared/components/subtext';
import { useEffectOnce } from '../../../shared/hooks/useEffectOnce';
import { FirstScreenStyled, ShareSongAnimation } from './styles';
import { FourthScreen } from './FourthScreen';
import { translate } from '../../../i18n';

const IMAGES = [
    'https://firebasestorage.googleapis.com/v0/b/soundbubble-27737.appspot.com/o/songsImages%2Fcopines10ef509d-6d30-4c03-b97b-3ee412eab944.jpeg?alt=media&token=7b592cbb-8a9f-4f32-9860-b640200b9d44',
    'https://firebasestorage.googleapis.com/v0/b/soundbubble-27737.appspot.com/o/songsImages%2Fdangerousgirl.jpeg487d654a-920f-46ec-82ec-026de39fbb79?alt=media&token=90320381-a974-4dd7-a0c3-e4d91b84acaa',
    'https://firebasestorage.googleapis.com/v0/b/soundbubble-27737.appspot.com/o/songsImages%2Flalala025b6d0f-e873-4868-9527-507a0c14ac0f.png?alt=media&token=d1da7a21-d17b-43d6-9ec1-fc5c3a1466b0',
    'https://firebasestorage.googleapis.com/v0/b/soundbubble-27737.appspot.com/o/songsImages%2Flimbo45dd7771-f23d-4752-acc0-5b877346e809.jpg?alt=media&token=992ebaf6-bf1b-435c-b7be-b91bb444e57e',
    'https://firebasestorage.googleapis.com/v0/b/soundbubble-27737.appspot.com/o/songsImages%2Fyouregonnagofar-kid.jpg?alt=media&token=3fac5e80-3af6-4dae-b4b8-bf3dfd90fc87',
    'https://firebasestorage.googleapis.com/v0/b/soundbubble-27737.appspot.com/o/songsImages%2Fsnow.png?alt=media&token=0e6ce692-0aa3-4216-9a8f-f1ec0f89f3db',
    'https://firebasestorage.googleapis.com/v0/b/soundbubble-27737.appspot.com/o/songsImages%2F%D0%BF%D0%BE%D1%80%D0%BD%D0%BE%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D0%B0.jpg?alt=media&token=79f54513-9d4f-4c40-88da-1c0b4c033728',
    'https://firebasestorage.googleapis.com/v0/b/soundbubble-27737.appspot.com/o/songsImages%2Fotw.jpg?alt=media&token=c20c902f-910b-4899-bc71-e0e65c57b20d',
];

export const ThirdScreen = () => {
    const [currentUser] = userModel.useUser();
    const [currentImage, setCurrentImage] = useState(0);

    useEffectOnce(() => {
        setInterval(() => {
            setCurrentImage((prev) =>
                prev === IMAGES.length - 1 ? 0 : prev + 1
            );
        }, 1950);
    }, []);

    return (
        <FirstScreenStyled>
            <ShareSongAnimation>
                <SongCover
                    src={IMAGES[currentImage]}
                    size={'30px'}
                    colors={undefined}
                />
            </ShareSongAnimation>
            <Flex width="100%" d="column" gap={40} padding="50px 0">
                <Flex width="100%" jc="space-between" padding="0 30px">
                    <Flex width="100px" d="column" gap={8}>
                        <UserCover
                            src={currentUser?.photoURL}
                            colors={currentUser?.imageColors}
                            size={'70px'}
                            isAuthor={false}
                        />
                        <Subtext style={{ fontSize: '0.8rem' }}>
                            {currentUser?.displayName}
                        </Subtext>
                    </Flex>
                    <Flex width="100px" d="column" gap={8}>
                        <UserCover
                            src={undefined}
                            colors={[]}
                            size={'70px'}
                            isAuthor={false}
                        />
                        <Subtext style={{ fontSize: '0.8rem' }}>
                            Your friend
                        </Subtext>
                    </Flex>
                </Flex>
                <Flex d="column" gap={10}>
                    <h2>{translate('share_songs')}</h2>
                    <Subtext>{translate('share_songs_subtext')}</Subtext>
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
                            content: <FourthScreen />,
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
