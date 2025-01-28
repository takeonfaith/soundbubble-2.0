import { IconLoader2 } from '@tabler/icons-react';
import { LoadingStyled } from './styles';

type Props = {
    size?: number;
};
export const Loading = ({ size = 18 }: Props) => {
    return (
        <LoadingStyled className="loading">
            <IconLoader2 size={size} />
        </LoadingStyled>
    );
};
