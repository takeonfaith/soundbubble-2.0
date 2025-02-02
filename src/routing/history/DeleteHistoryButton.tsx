import { IconTrash, IconChevronDown } from '@tabler/icons-react';
import { deleteHistory } from '../../entities/history/model/delete-history';
import { DeleteHistoryPeriod } from '../../entities/history/model/types';
import { TSong } from '../../entities/song/model/types';
import { confirmModel } from '../../layout/confirm/model';
import { popupModel } from '../../layout/popup/model';
import { Button } from '../../shared/components/button';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';

type Props = {
    history: { time: number; song: TSong | null }[];
};

export const DeleteHistoryButton = ({ history }: Props) => {
    if (!history.length) return null;

    return (
        <DefaultButton
            width="175px"
            onClick={(e) => {
                e.stopPropagation();
                const confirmDelete = (period: DeleteHistoryPeriod) => {
                    confirmModel.events.open({
                        text: `Are you sure you want to delete history for ${period}`,
                        onAccept: () => {
                            deleteHistory(period);
                        },
                    });
                };
                popupModel.events.open({
                    height: 176,
                    width: 175,
                    e,
                    content: (
                        <DefaultContextMenuStyled>
                            <Button
                                onClick={() =>
                                    confirmDelete(DeleteHistoryPeriod.hour)
                                }
                            >
                                For 1 hour
                            </Button>
                            <Button
                                onClick={() =>
                                    confirmDelete(DeleteHistoryPeriod.day)
                                }
                            >
                                For 1 day
                            </Button>
                            <Button
                                onClick={() =>
                                    confirmDelete(DeleteHistoryPeriod.month)
                                }
                            >
                                For 1 month
                            </Button>
                            <Button
                                onClick={() =>
                                    confirmDelete(DeleteHistoryPeriod.all)
                                }
                            >
                                All
                            </Button>
                        </DefaultContextMenuStyled>
                    ),
                });
            }}
        >
            <IconTrash size={20} />
            Delete history <IconChevronDown size={16} />
        </DefaultButton>
    );
};
