import { deleteHistory } from '../../entities/history/model';
import { DeleteHistoryPeriod } from '../../entities/history/model/types';
import { confirmModel } from '../../layout/confirm/model';
import { Button } from '../../shared/components/button';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';

export const DeleteHistoryPeriodContext = () => {
    const confirmDelete = (period: DeleteHistoryPeriod) => {
        confirmModel.events.open({
            text: `Are you sure you want to delete history for ${period}`,
            onAccept: () => {
                deleteHistory(period);
            },
        });
    };

    return (
        <DefaultContextMenuStyled style={{width: '175px'}}>
            <Button onClick={() => confirmDelete(DeleteHistoryPeriod.hour)}>
                For 1 hour
            </Button>
            <Button onClick={() => confirmDelete(DeleteHistoryPeriod.day)}>
                For 1 day
            </Button>
            <Button onClick={() => confirmDelete(DeleteHistoryPeriod.month)}>
                For 1 month
            </Button>
            <Button onClick={() => confirmDelete(DeleteHistoryPeriod.all)}>
                All
            </Button>
        </DefaultContextMenuStyled>
    );
};
