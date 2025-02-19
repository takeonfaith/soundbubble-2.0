import { deleteHistory } from '../../entities/history/model';
import { DeleteHistoryPeriod } from '../../entities/history/model/types';
import { translate } from '../../i18n';
import { confirmModel } from '../../layout/confirm/model';
import { Button } from '../../shared/components/button';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';

export const DeleteHistoryPeriodContext = () => {
    const valueMap = {
        [DeleteHistoryPeriod.hour]: `${translate('for')} 1 ${translate(
            'hour'
        )}`,
        [DeleteHistoryPeriod.day]: `${translate('for')} 1 ${translate('day')}`,
        [DeleteHistoryPeriod.month]: `${translate('for')} 1 ${translate(
            'month'
        )}`,
        [DeleteHistoryPeriod.all]: translate('all_history'),
    };
    const confirmDelete = (period: DeleteHistoryPeriod) => {
        confirmModel.events.open({
            text: translate('delete_history_warning', {
                period: valueMap[period],
            }),
            onAccept: () => {
                deleteHistory(period);
            },
        });
    };

    return (
        <DefaultContextMenuStyled style={{ width: '175px' }}>
            <Button onClick={() => confirmDelete(DeleteHistoryPeriod.hour)}>
                {valueMap[DeleteHistoryPeriod.hour]}
            </Button>
            <Button onClick={() => confirmDelete(DeleteHistoryPeriod.day)}>
                {valueMap[DeleteHistoryPeriod.day]}
            </Button>
            <Button onClick={() => confirmDelete(DeleteHistoryPeriod.month)}>
                {valueMap[DeleteHistoryPeriod.month]}
            </Button>
            <Button onClick={() => confirmDelete(DeleteHistoryPeriod.all)}>
                {valueMap[DeleteHistoryPeriod.all]}
            </Button>
        </DefaultContextMenuStyled>
    );
};
