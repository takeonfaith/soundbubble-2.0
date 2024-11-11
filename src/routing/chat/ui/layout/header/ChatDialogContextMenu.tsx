import { IconInfoCircle, IconPhoto } from '@tabler/icons-react';
import { TChat, TCache } from '../../../../../entities/chat/model/types';
import { modalModel } from '../../../../../layout/modal/model';
import { Button } from '../../../../../shared/components/button';
import { DefaultContextMenuStyled } from '../../../../../shared/components/defaultContextMenu';
import { ChatInfo } from './ChatInfo';

type Props = {
    chat: TChat;
    cache: TCache;
};

export const ChatDialogContextMenu = ({ cache, chat }: Props) => {
    const handleOpenInfo = () => {
        modalModel.events.open({
            title: 'Chat Information',
            content: <ChatInfo chat={chat} cache={cache} />,
            sizeY: 'm',
        });
    };

    return (
        <DefaultContextMenuStyled>
            <Button onClick={handleOpenInfo}>
                <IconInfoCircle />
                Info
            </Button>
            <Button>
                <IconPhoto />
                Change wallpaper
            </Button>
        </DefaultContextMenuStyled>
    );
};
