import { Skeleton } from '@components/skeleton';
import styled from 'styled-components';

export const SongsVerticalListStyled = styled.div``;

export const Titles = styled.div`
    width: 100%;
    display: grid;
    padding: 8px;
    grid-template-columns: 55px 1fr 1fr 200px 96px;
    color: ${({ theme }) => theme.colors.textColor};

    @media (max-width: 1080px) {
        display: none;
    }
`;

export const Title = styled.div`
    text-transform: uppercase;
    opacity: 0.3;
    font-size: 0.7rem;
    font-weight: 400;
`;

export const SongSkeletonListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const SongSkeletonStyled = styled.div`
    container-type: size;
    display: flex;
    align-items: center;
    gap: 0px;
    width: 100%;
    height: 40px;
`;

export const SkeletonCoverStyled = styled(Skeleton)`
    border-radius: ${({ theme }) => theme.borderRadius.mild};

    @container (min-width: 700px) {
        min-width: 35px;
        height: 35px;
    }

    @container (max-width: 699px) {
        min-width: 40px;
        height: 40px;
    }
`;

export const SongInfoSkeleton = styled.div`
    display: flex;
    width: 100%;

    @container (min-width: 700px) {
        flex-direction: row;
        align-items: center;
        gap: 30px;
        margin-left: 28px;
    }

    @container (max-width: 699px) {
        flex-direction: column;
        gap: 6px;
        margin-left: 15px;
    }
`;

export const SkeletonNameStyled = styled(Skeleton)`
    height: 15px;
    border-radius: ${({ theme }) => theme.borderRadius.mild};
    width: 100%;

    @container (min-width: 700px) {
        width: 100%;
    }

    @container (max-width: 699px) {
        width: 300px;
    }
`;

export const SkeletonAuthorStyled = styled(Skeleton)`
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.mild};

    @container (min-width: 700px) {
        width: 100%;
        height: 15px;
    }

    @container (max-width: 699px) {
        width: 200px;
        height: 8px;
    }
`;

export const SkeletonListens = styled(Skeleton)`
    height: 15px;
    border-radius: ${({ theme }) => theme.borderRadius.mild};

    @container (min-width: 700px) {
        width: 380px;
    }

    @container (max-width: 699px) {
        display: none;
    }
`;
