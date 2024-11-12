import { IconShare3 } from '@tabler/icons-react';
import { userModel } from '../../entities/user/model';
import { UserCover } from '../../entities/user/ui/UserCover';
import { Button } from '../../shared/components/button';
import { FriendsList, SendAnimationStyled, ShareButtonStyled } from './styles';
import { chatModel } from '../../entities/chat/model';
import { getChatImage } from '../../entities/chat/lib/getChatImage';
import { createMessageObject } from '../../entities/chat/lib/createMessageObject';
import { songModel } from '../../entities/song/model';
import { SongCover } from '../../entities/song/ui/SongCover';
import { useState } from 'react';
import { ANIMATION_DURATION } from './constants';
import { TChat } from '../../entities/chat/model/types';

export const ShareButton = () => {
    const [chats] = chatModel.useChats();
    const [cache] = chatModel.useCache();
    const [currentUser] = userModel.useUser();
    const { currentSong } = songModel.useSong();
    const [animation, setAnimation] = useState<number | null>(null);

    const handleShare = (chat: TChat, index: number) => {
        return () => {
            if (currentUser && currentSong) {
                setAnimation(index);
                chatModel.events.sendMessage({
                    chats: [chat],
                    message: (chat) =>
                        createMessageObject({
                            sender: currentUser?.uid,
                            participants: chat.participants,
                            message: '',
                            attachedSongs: [currentSong.id],
                        }),
                    showToast: true,
                });
                setTimeout(() => {
                    setAnimation(null);
                }, ANIMATION_DURATION);
            }
        };
    };

    return (
        <ShareButtonStyled className={currentSong ? 'has-hover' : ''}>
            <Button $width="42px" $height="42px" disabled={!currentSong}>
                <IconShare3 size={20} />
            </Button>
            <FriendsList>
                {chats.length > 3 && (
                    <Button style={{}} $background="#ffffff44">
                        +{chats.length - 3}
                    </Button>
                )}
                {chats
                    .slice(0, 3)
                    .reverse()
                    .map((chat, index) => {
                        return (
                            <Button
                                onClick={handleShare(chat, index)}
                                key={chat.id}
                            >
                                <UserCover
                                    src={getChatImage(chat, cache, currentUser)}
                                    size={'30px'}
                                    colors={undefined}
                                    isAuthor={false}
                                />
                            </Button>
                        );
                    })}
            </FriendsList>
            <SendAnimationStyled
                className={
                    animation !== null ? `animation${3 - animation}` : ''
                }
            >
                <SongCover
                    src={currentSong?.cover}
                    size={'25px'}
                    colors={currentSong?.imageColors}
                />
            </SendAnimationStyled>
        </ShareButtonStyled>
    );
};
