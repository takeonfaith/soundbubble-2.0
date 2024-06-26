import styled from 'styled-components';

export const InitialLoadingStyled = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    background: ${({ theme }) => theme.colors.pageBackground};
    width: 100%;
    height: 100dvh;
    transition: 1s;

    span {
        font-weight: 300;
        color: ${({ theme }) => theme.colors.greyText};
    }

    img {
        width: 100px;
        height: 100px;
    }

    &.loading {
    }

    &.loaded {
        opacity: 0;
        visibility: hidden;
    }
`;
