import { IconShare3 } from '@tabler/icons-react';
import { TEntity } from '../../entities/search/model/types';
import { userModel } from '../../entities/user/model';
import { translate } from '../../i18n';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import Popover from '../../shared/components/popover';
import { NO_ACCOUNT_FOR_ACTION } from '../../shared/constants/texts';
import {
    getEntityColors,
    getEntityName,
} from '../searchWithHints/lib/getDividedEntity';
import { ShareModal } from '../shareModal';
import { ShareButtonStyled } from './styles';

type Props = {
    entity: TEntity;
    type?: 'menu' | 'modal';
};

export const ShareButton = ({ entity, type = 'modal' }: Props) => {
    const colors = getEntityColors(entity);
    const [currentUser] = userModel.useUser();

    const handleShare = () => {
        modalModel.events.open({
            title: translate('share_with_friends', {
                share: getEntityName(entity),
            }),
            content: <ShareModal entity={entity} />,
            sizeY: 'l',
        });
    };

    if (type === 'menu') {
        return (
            <Popover content={!currentUser && NO_ACCOUNT_FOR_ACTION}>
                <Button disabled={!currentUser} onClick={handleShare}>
                    <IconShare3 />
                    {translate('share')}
                </Button>
            </Popover>
        );
    }

    return (
        <Popover
            targetElementStyle={{ width: '100%' }}
            content={!currentUser && NO_ACCOUNT_FOR_ACTION}
        >
            <ShareButtonStyled
                disabled={!currentUser}
                color={colors[0]}
                onClick={handleShare}
            >
                {translate('share')}
            </ShareButtonStyled>
        </Popover>
    );
};
