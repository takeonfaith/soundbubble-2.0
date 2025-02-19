import { IconMessage2 } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { Loading } from '../../shared/components/loading';
import { $userOpening, openChat, openChatFx } from './model';
import { OpenChatButtonStyled } from './styles';
import { translate } from '../../i18n';

type Props = {
    userId: string;
    short?: boolean;
};

export const OpenChatButton = ({ userId, short = false }: Props) => {
    const [isLoading, userOpening] = useUnit([
        openChatFx.pending,
        $userOpening,
    ]);

    const handleOpenChat = () => openChat(userId);

    return (
        <OpenChatButtonStyled className="outline" onClick={handleOpenChat}>
            {isLoading && userOpening === userId ? (
                <Loading />
            ) : (
                <IconMessage2 size={20} />
            )}
            {!short && translate('message')}
        </OpenChatButtonStyled>
    );
};
