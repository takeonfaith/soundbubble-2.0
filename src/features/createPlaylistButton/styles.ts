import { styled } from 'styled-components';

export const IconWrapper = styled.div`
    height: 35%;
    width: 35%;
    display: flex;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.scheme.blue.transparent};

    &.horizontal {
        width: 70%;
        height: 70%;
        background-color: transparent;
    }
`;

export const AddPlaylistStyled = styled.div`
    width: 100%;
    height: calc(100% - 30px);
    border-radius: ${({ theme }) => theme.borderRadius.middle};
    top: 0;
    left: 0;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.chatBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1rem;
    gap: 16px;
    color: ${({ theme }) => theme.colors.greyText2};

    &:hover {
        background: ${({ theme }) => theme.colors.input};
    }

    svg {
        width: 65%;
        height: 65%;
        color: ${({ theme }) => theme.scheme.blue.action};
    }

    &.horizontal {
        width: var(--size);
        height: var(--size);
        border-radius: 2px;
        top: 6px;
        left: 8px;

        svg {
            width: 80%;
            height: 80%;
        }
    }
`;
