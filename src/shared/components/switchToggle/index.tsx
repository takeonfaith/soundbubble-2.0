import { WIDTH, HEIGHT } from './constants';
import { SwitchToggleStyled } from './styles';

type Props = {
    checked: boolean;
    onChange: (e: Evt<'input'>) => void;
    onClick?: (e: Evt<'label'>) => void;
    primaryColor?: string;
    size?: TSize;
};

export const SwitchToggle = ({
    checked,
    onChange,
    onClick,
    primaryColor,
    size = 'm',
}: Props) => {
    return (
        <SwitchToggleStyled
            onClick={onClick}
            $width={WIDTH[size]}
            $height={HEIGHT[size]}
            className="switch-toggle"
            $primaryColor={primaryColor}
        >
            <input type="checkbox" checked={checked} onChange={onChange} />
            <div className="switchToggle">
                <div className="circle"></div>
            </div>
        </SwitchToggleStyled>
    );
};
