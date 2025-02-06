import styled from 'styled-components';
import { Subtext } from '../subtext';

export const SongInputStyled = styled.form`
    width: 100%;
    min-height: 230px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
    flex-direction: column;
    gap: 20px;
    cursor: pointer;
    background-image: ${({ theme }) =>
        `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='14' ry='14' stroke='%23${theme.colors.border.replace('#', '')}' stroke-width='4' stroke-dasharray='8' stroke-dashoffset='54' stroke-linecap='square'/%3e%3c/svg%3e")`};
    border-radius: 14px;

    &.dragActive {
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='14' ry='14' stroke='%237BA2FFFF' stroke-width='4' stroke-dasharray='8' stroke-dashoffset='54' stroke-linecap='square'/%3e%3c/svg%3e");
        border-radius: 14px;
        background-color: ${({ theme }) => theme.scheme.blue.transparent};
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
    position: relative;

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
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 300px;
`;

export const UploadedSongAuthor = styled(Subtext)`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 300px;
`;

export const DragIconAnimated = styled.div`
    svg {
        width: 30px;
        height: 30px;
        animation: pulse 1s linear infinite;

        @keyframes pulse {
            0% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(3px);
            }
            100% {
                transform: translateY(0px);
            }
        }
    }
`;
