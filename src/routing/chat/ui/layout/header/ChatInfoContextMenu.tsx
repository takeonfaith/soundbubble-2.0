import { IconLogout, IconTrash } from '@tabler/icons-react';
import { chatModel } from '../../../../../entities/chat/model';
import { userModel } from '../../../../../entities/user/model';
import { confirmModel } from '../../../../../layout/confirm/model';
import { toastModel } from '../../../../../layout/toast/model';
import { Button } from '../../../../../shared/components/button';
import { DefaultContextMenuStyled } from '../../../../../shared/components/defaultContextMenu';
import { translate } from '../../../../../i18n';

export const ChatInfoContextMenu = () => {
    const [currentUser] = userModel.useUser();
    const [chat] = chatModel.useCurrentChat();
    const isAdmin = currentUser
        ? chat?.admins?.includes(currentUser.uid)
        : false;

    const handleClickLeave = () => {
        if (chat && currentUser) {
            confirmModel.events.open({
                text: 'Are you sure you want to leave chat?',
                onAccept: () => {
                    chatModel.events.editChat({
                        chat,
                        update: {
                            participants: chat.participants.filter(
                                (p) => p !== currentUser.uid
                            ),
                        },
                        onSuccess: () => {
                            toastModel.events.add({
                                type: 'success',
                                message: 'You left the chat',
                                duration: 10000,
                            });
                        },
                    });
                },
            });
        }
    };

    return (
        <DefaultContextMenuStyled>
            <Button onClick={handleClickLeave}>
                <IconLogout />
                {translate('leave_chat')}
            </Button>
            {isAdmin && (
                <Button className="danger" onClick={() => null}>
                    <IconTrash />
                    Delete chat
                </Button>
            )}
        </DefaultContextMenuStyled>
    );
};
