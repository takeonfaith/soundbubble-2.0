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

export const ShareButton = () => {
    const { chats, chatData } = chatModel.useChats();
    const [{ data }] = userModel.useUser();
    const { currentSong } = songModel.useSong();
    const [animation, setAnimation] = useState<number | null>(null);

    const handleShare = (chatId: string, index: number) => {
        return () => {
            if (data && currentSong) {
                const message = createMessageObject(data?.uid, {
                    message: '',
                    attachedSongs: [currentSong.id],
                });
                setAnimation(index);
                chatModel.events.sendMessage({
                    chatId,
                    message,
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
                            <Button onClick={handleShare(chat.id, index)}>
                                <UserCover
                                    src={getChatImage(chat, chatData, data)}
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
