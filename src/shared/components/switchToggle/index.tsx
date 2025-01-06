import { WIDTH, HEIGHT } from './constants';
import { SwitchToggleStyled } from './styles';

type Props = {
    checked: boolean;
    onChange: (e: Evt<'input'>) => void;
    onClick?: (e: Evt<'label'>) => void;
    size?: TSize;
};

export const SwitchToggle = ({
    checked,
    onChange,
    onClick,
    size = 'm',
}: Props) => {
    return (
        <SwitchToggleStyled
            onClick={onClick}
            $width={WIDTH[size]}
            $height={HEIGHT[size]}
        >
            <input type="checkbox" checked={checked} onChange={onChange} />
            <div className="switchToggle">
                <div className="circle"></div>
            </div>
        </SwitchToggleStyled>
    );
};
