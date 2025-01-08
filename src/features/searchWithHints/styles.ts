import styled from 'styled-components';

export const SearchWithHintsStyled = styled.div`
    width: 100%;
    position: relative;
`;

export const HintsStyled = styled.ul`
    width: 100%;
    background: ${({ theme }) => theme.colors.pageTopButton};
    height: fit-content;
    min-height: 45px;
    max-height: 568px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 4px;
    border-radius: ${({ theme }) => theme.borderRadius.mild};
    position: absolute;
    transform: translateY(4px);
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: ${({ theme }) => theme.colors.textColor};
    border-top: none;
    z-index: 1300;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    animation: hintsAppear 0.2s;

    @keyframes hintsAppear {
        0% {
            opacity: 0;
            transform: translateY(10px);
        }
        100% {
            opacity: 1;
            transform: translateY(4px);
        }
    }

    @media (max-width: 768px) {
        box-shadow: none;
        height: calc(100vh - 240px);
        max-height: none;
        border-radius: 0;
        left: -20px;
        padding: 0 4px;
        width: calc(100% + 40px);
        background: ${({ theme }) => theme.colors.pageBackground};
    }
`;

export const HintItemStyled = styled.li`
    padding: 6px 12px;
    min-height: 52px;
    border-radius: ${({ theme }) => `calc(${theme.borderRadius.mild} - 2px)`};
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-weight: 200;
    width: 100%;

    .authors {
        width: fit-content;
        white-space: nowrap;
    }

    &:focus {
        background: ${({ theme }) => theme.colors.hover};
        outline: 1px solid ${({ theme }) => theme.scheme.grey.text};
    }

    @media (hover: hover) {
        &:hover {
            background: ${({ theme }) => theme.colors.hover};
        }

        &.selected {
            &:hover {
                filter: brightness(0.9);
            }
        }
    }

    @media (hover: none) {
        &:active {
            background: ${({ theme }) => theme.colors.hover};
        }
    }

    &.selected {
        background: ${({ theme }) => theme.scheme.blue.transparent};
        font-weight: 400;
    }

    @media (max-width: 768px) {
        padding: 8px 20px;
    }
`;

export const HintName = styled.div`
    white-space: nowrap;
`;

export const HintIcon = styled.div`
    min-width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg, img {
        color: ${({ theme }) => theme.scheme.grey.text};
        width: 20px;
        height: 20px;
    }

    @media (max-width: 768px) {
        min-width: 20px;
        margin-right: 5px;
    }
`;
