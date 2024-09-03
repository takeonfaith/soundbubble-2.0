import styled from 'styled-components';

const SwitchToggleStyled = styled.label<{ $width: number; $height: number }>`
    input[type='checkbox'] {
        display: none;
    }

    .switchToggle {
        width: ${({ $width }) => $width}px;
        height: ${({ $height }) => $height}px;
        border-radius: 20px;
        background-color: ${({ theme }) => theme.colors.border};
        position: relative;
        cursor: pointer;
        transition: 0.2s;
    }

    .circle {
        width: calc(${({ $height }) => $height}px - 4px);
        height: calc(${({ $height }) => $height}px - 4px);
        background: ${({ theme }) => theme.colors.pageBackground};

        border-radius: 100%;
        position: absolute;
        top: 2px;
        left: 2px;
        transition: 0.2s;
        box-shadow: 0 0px 4px 0 ${({ theme }) => theme.colors.border};
    }

    input:checked + .switchToggle .circle {
        background: #fff;
        transform: translateX(calc(100% - 4px));
        box-shadow: none;
    }

    input:checked + .switchToggle {
        background: ${({ theme }) => theme.scheme.blue.action};
    }
`;

type Props = {
    checked: boolean;
    onChange: (e: Evt<'input'>) => void;
    size?: TSize;
};

const HEIGHT = {
    s: 24,
    m: 32,
    l: 40,
};

const WIDTH = {
    s: 40,
    m: 56,
    l: 70,
};

export const SwitchToggle = ({ checked, onChange, size = 'm' }: Props) => {
    return (
        <SwitchToggleStyled $width={WIDTH[size]} $height={HEIGHT[size]}>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <div className="switchToggle">
                <div className="circle"></div>
            </div>
        </SwitchToggleStyled>
    );
};
