import styled from 'styled-components';
import { PageWrapper } from '../../shared/components/pageWrapper';

export const HistoryPageWrapper = styled(PageWrapper)`
    header {
        h2 {
            margin-left: 6px;
        }
    }

    .pagination {
        width: 100%;
        height: 100%;
    }

    .title {
        position: sticky;
        top: 70px;
        background: ${({ theme }) => theme.colors.pageBackground};
        width: 100%;
        height: fit-content;
        margin-bottom: 20px;
        margin-left: 6px;
        z-index: 10;

        h3 {
            font-weight: 400;
        }
    }
`;
