import styled from 'styled-components';

export const InputWrapper = styled.div<{ $disabled?: boolean }>`
    position: relative;
    width: 100%;

    opacity: ${({ $disabled }) => ($disabled ? 0.4 : 1)};
    pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'all')};
`;

const Icon = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 8px;

    svg {
        width: 18px;
        height: 18px;
        color: ${({ theme }) => theme.colors.textColor};
        opacity: 0.3;
    }

    img {
        width: 16px;
        height: 16px;
    }

    @media (max-width: 768px) {
        top: 10px;
    }
`;

export const InputFieldWrapper = styled.div`
    height: fit-content;
    position: relative;
`;

export const LeftIcon = styled(Icon)`
    left: 10px;
`;

export const RightIcon = styled(Icon)`
    right: 10px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background: ${({ theme }) => theme.colors.hover};
    }
`;

export const Label = styled.label`
    font-size: 0.8rem;
    margin-bottom: 4px;
    font-weight: 300;
    display: inline-block;
    width: 100%;
    color: ${({ theme }) => theme.scheme.grey.text};
`;

export const InputError = styled(Label)`
    margin-bottom: 0;
    margin-top: 4px;
    color: ${({ theme }) => theme.scheme.red.text};
`;

export const Required = styled.span`
    color: ${({ theme }) => theme.scheme.red.main};
`;

export const InputStyled = styled.input<{
    $hasIcon: boolean;
    $hasRightIcon: boolean;
    $hasError: boolean;
}>`
    border: none;
    background: ${({ theme }) => theme.colors.input};
    padding: 10px 10px;
    border-radius: ${({ theme }) => theme.borderRadius.middle};
    color: ${({ theme }) => theme.colors.textColor};
    height: 40px;
    font-size: 0.9rem;
    font-weight: 200;
    width: 100%;
    border: ${({ theme, $hasError }) =>
        $hasError ? `1px solid ${theme.scheme.red.text}` : 'none'};
    padding-left: ${({ $hasIcon }) => ($hasIcon ? '40px' : '14px')};
    padding-right: ${({ $hasRightIcon }) => ($hasRightIcon ? '40px' : '14px')};

    &:disabled {
        background: ${({ theme }) => theme.colors.border};
    }

    @media (max-width: 768px) {
        height: 43px;
        /* border-radius: 10px; */
        font-size: 0.97rem;
    }
`;

export const MaxLenWrapper = styled.div`
    position: absolute;
    top: 4px;
    right: 4px;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.scheme.grey.text};
`;
