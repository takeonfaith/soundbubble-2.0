import styled from 'styled-components';

export const PageWrapper = styled.div`
    overflow-y: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    scrollbar-gutter: stable;
`;

export const ContentWrapper = styled.div`
    padding: 20px var(--page-padding);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
    position: relative;

    @media (max-width: 1000px) {
        padding: 0 var(--page-padding);
        padding-bottom: 10px;
        gap: 4px;
    }
`;
