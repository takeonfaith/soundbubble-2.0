import { IconChevronDown, IconTrash } from '@tabler/icons-react';
import { TSong } from '../../entities/song/model/types';
import { Popup } from '../../layout/newpopup';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { DeleteHistoryPeriodContext } from './DeleteHistoryPeriodContext';

type Props = {
    history: { time: number; song: TSong | null }[];
};

export const DeleteHistoryButton = ({ history }: Props) => {
    if (!history.length) return null;

    return (
        <Popup content={<DeleteHistoryPeriodContext />}>
            <DefaultButton width="175px">
                <IconTrash size={20} />
                Delete history <IconChevronDown size={16} />
            </DefaultButton>
        </Popup>
    );
};
