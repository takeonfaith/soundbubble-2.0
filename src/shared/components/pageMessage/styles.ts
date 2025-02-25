import { styled } from 'styled-components';

export const PageMessageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 100%;
    min-height: 250px;

    &.with-header {
        height: calc(100% - var(--header-height) * 2);
    }

    svg {
        stroke-width: 1.7px;
    }

    h3 {
        font-weight: 300;
    }
`;
