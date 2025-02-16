import { IconShare3, IconInfoCircle } from '@tabler/icons-react';
import { Button } from '../../shared/components/button';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';
import Popover from '../../shared/components/popover';
import { NO_ACCOUNT_FOR_ACTION } from '../../shared/constants/texts';
import { userModel } from '../../entities/user/model';
import { ShareModal } from '../../features/shareModal';
import { modalModel } from '../../layout/modal/model';
import { popupModel } from '../../layout/popup/model';
import { TUser } from '../../entities/user/model/types';
import { UserInfo } from '../../entities/user/ui/UserInfo';

type Props = {
    author: TUser;
};

export const AuthorMoreContext = ({ author }: Props) => {
    const [currentUser] = userModel.useUser();
    const { displayName } = author;

    const handleClickShare = () => {
        popupModel.events.close();
        modalModel.events.open({
            title: `Share ${displayName} with friends`,
            content: <ShareModal entity={author} />,
            sizeY: 'm',
        });
    };

    const handleInfo = () => {
        popupModel.events.close();
        modalModel.events.open({
            title: '',
            content: <UserInfo user={author} />,
        });
    };
    return (
        <DefaultContextMenuStyled>
            <Popover content={!currentUser ? NO_ACCOUNT_FOR_ACTION : null}>
                <Button disabled={!currentUser} onClick={handleClickShare}>
                    <IconShare3 />
                    Share
                </Button>
            </Popover>
            <Button onClick={handleInfo}>
                <IconInfoCircle />
                Info
            </Button>
        </DefaultContextMenuStyled>
    );
};
