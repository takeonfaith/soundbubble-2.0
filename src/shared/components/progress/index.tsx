import { ProgressLine, ProgressWrapper } from './styles';

type Props = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * From 0 to 1
     */
    value: number;
    /**
     * Color of the progress bar
     */
    color?: string;
};

export const Progress = ({ value, color, ...props }: Props) => {
    return (
        <ProgressWrapper {...props}>
            <ProgressLine
                style={{ width: `${value * 100}%`, background: color }}
            />
        </ProgressWrapper>
    );
};
