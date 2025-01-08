import { useTheme } from 'styled-components';
import Popover from '../popover';
import { TPopoverPosition } from '../popover/types';

type Props = {
    children: React.ReactNode;
    position: TPopoverPosition;
    content: React.ReactNode;
};
export const TutorialPopover = ({ children, content, position }: Props) => {
    const theme = useTheme();
    return (
        <Popover
            content={content}
            position={position}
            style={{
                color: '#fff',
                background: theme.scheme.blue.action,
                border: 'none',
                fontSize: '0.9rem',
                padding: '8px 10px',
            }}
            showTongue
        >
            {children}
        </Popover>
    );
};
