import styled from 'styled-components';

export const SongInputStyled = styled.form`
    width: 100%;
    min-height: 230px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
    border: 3px dashed ${({ theme }) => theme.colors.border};
    flex-direction: column;
    gap: 20px;
    cursor: pointer;

    &.dragActive {
        border: 3px dashed ${({ theme }) => theme.scheme.blue.action};
        background: ${({ theme }) => theme.scheme.blue.transparent};
    }

    &.error {
        border: 3px dashed ${({ theme }) => theme.scheme.red.action};
    }

    h3 {
        font-weight: 400;
    }

    button {
        width: fit-content;
        padding: 0 20px;
        min-height: 36px;
    }

    input[type='file'] {
        display: none;
    }

    #drag-file-element {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
    }
`;

export const SongInputLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    cursor: pointer;
    width: 100%;
    height: 100%;
`;

export const SongInputIcon = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.scheme.blue.transparent};
    color: ${({ theme }) => theme.scheme.blue.action};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 15px;

    svg {
        width: 30px;
        height: 30px;
    }
`;

export const UploadedSongStyled = styled.div`
    padding: 4px;
    padding-right: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    border-radius: 7px;
    cursor: pointer;
    animation: generalAppear 0.4s forwards;

    @media (hover: hover) {
        &:hover {
            background: ${({ theme }) => theme.colors.hover};
        }
    }
`;

export const UploadedSongName = styled.div`
    font-size: 1rem;
    font-weight: 200;
`;
