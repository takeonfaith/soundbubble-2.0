import { IconCopy, IconShare3 } from '@tabler/icons-react';
import { Button } from '../../../../shared/components/button';
import { DefaultContextMenuStyled } from '../../../../shared/components/defaultContextMenu';

// type Props = {
// 	message: TMessage
// }

export const MessageContextMenu = () => {
    return (
        <DefaultContextMenuStyled>
            <Button>
                <IconShare3 />
                Reply
            </Button>
            <Button>
                <IconCopy />
                Copy
            </Button>
        </DefaultContextMenuStyled>
    );
};
