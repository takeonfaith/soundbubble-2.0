import {
    IconCircle,
    IconCircleCheckFilled,
    IconCirclePlus,
    IconSquareRoundedMinusFilled,
    IconSquareRoundedPlus,
} from '@tabler/icons-react';
import { CheckIconStyled } from './styles';

type Props = {
    checked: boolean;
    type: 'checkbox' | 'minus' | 'plus';
};

export const CheckIcon = ({ checked, type = 'checkbox' }: Props) => {
    return (
        <CheckIconStyled $checked={checked} $type={type}>
            {checked ? (
                type === 'checkbox' || type === 'plus' ? (
                    <IconCircleCheckFilled size={24} color="blue" />
                ) : (
                    <IconSquareRoundedMinusFilled />
                )
            ) : type === 'plus' ? (
                <IconSquareRoundedPlus />
            ) : (
                <IconCircle size={24} />
            )}
        </CheckIconStyled>
    );
};
