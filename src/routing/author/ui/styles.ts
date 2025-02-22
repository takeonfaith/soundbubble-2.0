import styled from 'styled-components';
import { BeautifulBackground } from '../../../shared/components/beautifulBackground';
import { PageWrapper } from '../../../shared/components/pageWrapper';

export const AuthorPageWrapper = styled(PageWrapper)`
    .title {
        margin-bottom: 10px;
        margin-left: 40px;
    }

    h3 {
        font-weight: 400;
    }

    @media (max-width: 1000px) {
        .title {
            margin-left: 20px;
        }
    }
`;

export const AuthorTopStyled = styled(BeautifulBackground)`
    height: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    background-size: 300% 300%;
    animation: none;
`;

export const UserImageStyled = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100%;
    overflow: hidden;
    z-index: 2;

    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
`;

export const SongsStyled = styled.div`
    width: 100%;
    padding: 40px 0;
    padding-bottom: 0px;

    & .grid-list {
        padding: 0 34px;
    }

    @media (max-width: 1000px) {
        padding: 0;
        padding-bottom: 30px;
        padding-top: 40px;

        & .grid-list {
            padding: 0;
        }
    }
`;

export const PlaylistsStyled = styled.div`
    width: 100%;

    & .horizontal-list {
        padding: 0 40px;
        padding-bottom: 40px;
    }

    @media (max-width: 1000px) {
        padding-bottom: 20px;

        & .horizontal-list {
            padding: 0;
            gap: 10px;
        }
    }
`;

export const ButtonsStyled = styled.div<{ $color: string }>`
    display: flex;
    align-items: center;
    gap: 2px;
    width: fit-content;
    margin-bottom: -70px;
    border-radius: 30px;
    padding: 0px;
    background: ${({ theme }) => theme.colors.pageBackground};
    outline: 4px solid ${({ theme }) => theme.colors.pageBackground};
    position: relative;

    button {
        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            inset: 0;
            background: ${({ $color }) => $color};
            z-index: -1;
            display: none;
            filter: brightness(${({ theme }) => theme.colors.brightness});
        }

        &.primary {
            background: transparent;
            z-index: 2;
            color: ${({ theme }) => theme.colors.textColorOppiste} !important;

            &::before {
                display: block;
            }
        }

        &:not(.primary):not(:disabled) {
            background: ${({ theme }) => theme.colors.input} !important;

            /* &:hover {
                background: ${({ theme }) => theme.colors.hover};
            } */
        }
    }

    & button.play-button {
        border-radius: 30px 2px 2px 30px !important;

        &::before {
            border-radius: 30px 2px 2px 30px;
        }
    }

    & button.slow-button {
        border-radius: 2px !important;

        &::before {
            border-radius: 2px;
        }
    }

    & button.shuffle-button {
        border-radius: 2px 30px 30px 2px !important;

        &::before {
            border-radius: 2px 30px 30px 2px;
        }
    }

    @media (max-width: 500px) {
        width: 100%;
        padding: 0 20px;

        button {
            height: 43px;
        }
    }
`;

export const SimilarAuthorsStyled = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors.pageBackground2};
    display: flex;
    flex-direction: column;
    padding: 30px 0;

    & .horizontal-list {
        padding: 0 40px;
    }

    @media (max-width: 1000px) {
        padding: 20px 0px;

        & .horizontal-list {
            padding: 0;
        }
    }
`;
