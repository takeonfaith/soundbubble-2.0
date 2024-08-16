import { ProgressLine, ProgressWrapper } from './styles';

type Props = {
    /**
     * From 0 to 1
     */
    value: number;
    /**
     * Color of the progress bar
     */
    color?: string;
};

export const Progress = ({ value, color }: Props) => {
    return (
        <ProgressWrapper>
            <ProgressLine
                style={{ width: `${value * 100}%`, background: color }}
            />
        </ProgressWrapper>
    );
};
