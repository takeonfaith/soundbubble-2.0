import { IconInfoCircle } from '@tabler/icons-react';
import { TUser } from '../../../entities/user/model/types';
import { ShareButton } from '../../../features/shareButton';
import { translate } from '../../../i18n';
import { modalModel } from '../../../layout/modal/model';
import { popupModel } from '../../../layout/popup/model';
import { Button } from '../../../shared/components/button';
import { DefaultContextMenuStyled } from '../../../shared/components/defaultContextMenu';
import { UserInfo } from '../../../entities/user/ui/UserInfo';

type Props = {
    author: TUser;
};

export const AuthorMoreContext = ({ author }: Props) => {
    const handleInfo = () => {
        popupModel.events.close();
        modalModel.events.open({
            title: '',
            content: <UserInfo user={author} />,
        });
    };

    return (
        <DefaultContextMenuStyled>
            <ShareButton entity={author} type="menu" />
            <Button onClick={handleInfo}>
                <IconInfoCircle />
                {translate('info')}
            </Button>
        </DefaultContextMenuStyled>
    );
};
