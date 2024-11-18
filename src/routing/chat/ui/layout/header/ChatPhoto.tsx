import { IconPencil } from '@tabler/icons-react';
import { chatModel } from '../../../../../entities/chat/model';
import { TChat } from '../../../../../entities/chat/model/types';
import { LoadingOverlay } from '../../../../../entities/song/ui/styles';
import { UserCover } from '../../../../../entities/user/ui/UserCover';
import { UserCoverBackground } from '../../../../../entities/user/ui/UserCoverBackground';
import { EditPhotoModal } from '../../../../../features/editPhotoModal';
import { modalModel } from '../../../../../layout/modal/model';

type Props = {
    chatTitle: string;
    chatImage: string | undefined;
    isEditingMode: boolean;
    chat: TChat;
    isFullSize: boolean;
    setIsFullSize: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ChatPhoto = ({
    chat,
    chatTitle,
    isEditingMode,
    chatImage,
    isFullSize,
    setIsFullSize,
}: Props) => {
    const size = isFullSize ? '500px' : '160px';
    const borderRadius = isFullSize ? '0' : undefined;

    const Modal = () => (
        <EditPhotoModal
            onSave={(newImage, _, setLoading) => {
                chatModel.events.editChat({
                    chat,
                    update: {
                        chatImage: newImage,
                    },
                    onSuccess: () => {
                        modalModel.events.back();
                        chatModel.events.toggleIsEditing();
                        setLoading(false);
                    },
                });
            }}
            imageColors={[]}
            photo={chat.chatImage}
        />
    );

    return (
        <UserCover
            size={size}
            src={chatImage}
            colors={[]}
            fallbackIcon={
                <UserCoverBackground
                    name={chatTitle ?? 'Undefined'}
                    width={size}
                    borderRadius={borderRadius}
                />
            }
            isAuthor={false}
            style={{
                transition:
                    '0.2s width, 0.2s height, 0.2s min-width, 0.2s min-height, 0.25s border-radius',
                cursor: 'pointer',
            }}
            borderRadius={borderRadius}
            onClick={() => {
                if (!isEditingMode) {
                    setIsFullSize((prev) => !prev);
                }
            }}
        >
            {isEditingMode && (
                <LoadingOverlay
                    style={{
                        opacity: '0.8',
                        cursor: 'pointer',
                        borderRadius: '100%',
                    }}
                    onClick={() =>
                        modalModel.events.open({
                            title: 'Edit chat image',
                            content: <Modal />,
                        })
                    }
                >
                    <IconPencil color="#fff" size={50} />
                </LoadingOverlay>
            )}
        </UserCover>
    );
};
