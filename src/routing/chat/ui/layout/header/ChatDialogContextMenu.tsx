import { IconInfoCircle } from '@tabler/icons-react';
import { TCache } from '../../../../../entities/chat/model/types';
import { modalModel } from '../../../../../layout/modal/model';
import { popupModel } from '../../../../../layout/popup/model';
import { Button } from '../../../../../shared/components/button';
import { DefaultContextMenuStyled } from '../../../../../shared/components/defaultContextMenu';
import { ChatInfo } from './ChatInfo';

type Props = {
    cache: TCache;
};

export const ChatDialogContextMenu = ({ cache }: Props) => {
    const handleOpenInfo = () => {
        popupModel.events.close();
        modalModel.events.open({
            title: 'Chat Information',
            content: <ChatInfo cache={cache} />,
            sizeY: 'm',
        });
    };

    return (
        <DefaultContextMenuStyled>
            <Button onClick={handleOpenInfo}>
                <IconInfoCircle />
                Info
            </Button>
        </DefaultContextMenuStyled>
    );
};
