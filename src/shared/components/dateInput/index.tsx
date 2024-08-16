import { Input } from '../input';
import { InputProps } from '../input/types';

type Props = InputProps;

export const DateInput = (props: Props) => {
    return <Input {...props} type="date" />;
};
