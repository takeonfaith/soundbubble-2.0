import styled from 'styled-components';

export const PageWrapper = styled.div`
    overflow-y: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const ContentWrapper = styled.div`
    padding: 20px var(--page-padding);
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 2px;

    @media (max-width: 1000px) {
        padding: 0 20px;
        padding-bottom: 10px;
        gap: 4px;
    }
`;
