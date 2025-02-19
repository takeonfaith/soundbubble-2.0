import { IconChevronDown, IconTrash } from '@tabler/icons-react';
import { TSong } from '../../entities/song/model/types';
import { translate } from '../../i18n';
import { Popup } from '../../layout/newpopup';
import { Button } from '../../shared/components/button';
import { DeleteHistoryPeriodContext } from './DeleteHistoryPeriodContext';

type Props = {
    history: { time: number; song: TSong | null }[];
};

export const DeleteHistoryButton = ({ history }: Props) => {
    if (!history.length) return null;

    return (
        <Popup content={<DeleteHistoryPeriodContext />}>
            <Button
                className="outline"
                style={{ padding: '0 10px' }}
                $width="fit-content"
            >
                <IconTrash size={18} />
                {translate('delete_history')} <IconChevronDown size={16} />
            </Button>
        </Popup>
    );
};
