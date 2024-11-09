import styled from 'styled-components';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import { Textarea } from '../../shared/components/textarea';

export const PlaylistPageStyled = styled.div`
    width: 100%;

    .playlist-control {
        padding: 16px calc(var(--page-padding) + 8px);
        width: 100%;
    }
`;

export const PlaylistPageSongs = styled.div`
    width: 100%;
    padding: 0 var(--page-padding);
    padding-bottom: 0;

    @media (max-width: 1000px) {
        padding: 40px var(--page-padding);
        padding-bottom: 0;

        display: flex;
        flex-direction: column;
        gap: 2px;
    }
`;

export const BottomPlaylist = styled.div`
    padding: 0 calc(var(--page-padding) + 6px);
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1000px) {
        padding: 0 var(--page-padding);
        margin-top: 10px;
    }
`;

export const PlaylistSimilar = styled.div``;

export const PlaylistImageStyled = styled.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 20px;
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 70px;
        height: 70px;
    }

    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
`;

export const DesktopGridHeaderStyled = styled(Flex)`
    @media (max-width: 1000px) {
        display: none;
    }
`;

export const LikeButtonWrapper = styled.div`
    button {
        /* filter: brightness(${({ theme }) => theme.colors.brightness}); */
    }
`;

export const PlaylistNameStyled = styled.div`
    &.hoverable:hover > * {
        outline: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 4px;
    }
`;

export const PlaylistNameInput = styled(Input)`
    font-size: 2rem;
    font-weight: 600;
    border-radius: 4px;
    max-height: 60px;
    height: 50px;
    padding: 6px;
    background: ${({ theme }) => theme.colors.lightHover};
    outline: 1px solid ${({ theme }) => theme.colors.border};
`;

export const DescriptionStyled = styled.div`
    font-size: 0.85rem;
    font-weight: 200;
    max-width: 400px;
    white-space: wrap;
    display: inline-block;
    color: ${({ theme }) => theme.colors.greyText2};
`;

export const PlaylistDescriptionInput = styled(Textarea)`
    font-size: 0.85rem;
    font-weight: 200;
    width: 300px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.lightHover};
    outline: 1px solid ${({ theme }) => theme.colors.border};
`;

export const IconWrapper = styled.div`
    width: 200px;
    height: 200px;
    background: ${({ theme }) => theme.scheme.blue.mild};
    border-radius: 20px;
    color: ${({ theme }) => theme.scheme.blue.action};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 60%;
        height: 60%;
        filter: drop-shadow(0 0 35px);
    }
`;
