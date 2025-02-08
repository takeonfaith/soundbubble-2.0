import { IconMessage2 } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { Loading } from '../../shared/components/loading';
import { openChat, openChatFx } from './model';
import { OpenChatButtonStyled } from './styles';

type Props = {
    userId: string;
    short?: boolean;
};

export const OpenChatButton = ({ userId, short = false }: Props) => {
    const isLoading = useUnit(openChatFx.pending);

    const handleOpenChat = () => openChat(userId);

    return (
        <OpenChatButtonStyled className="outline" onClick={handleOpenChat}>
            {isLoading ? <Loading /> : <IconMessage2 size={20} />}
            {!short && 'Message'}
        </OpenChatButtonStyled>
    );
};
