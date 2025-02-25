import styled from 'styled-components';
import { Button } from '../../shared/components/button';
import { MEDIA_QUERIES } from '../../shared/constants/screenSize';

export const LayoutHeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 30px;
    padding-bottom: 0;
    padding-right: var(--page-gap);
    gap: 92px;
    max-height: 56px;

    .hide-sidebar-button {
        opacity: 0;
    }

    &:hover .hide-sidebar-button {
        opacity: 1;
    }

    .general-cover {
        outline: 2px solid ${({ theme }) => theme.colors.pageBackground2};
    }

    @media (max-width: 1100px) {
        .logo-text {
            display: none;
        }
    }

    ${MEDIA_QUERIES.isTablet} {
        display: none;
    }
`;

export const UserButton = styled(Button)`
    border-radius: 20px;
    padding: 4px;
    padding-right: 14px;
    max-width: 220px;
    width: fit-content;
    justify-content: space-between;

    .name {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 0.8rem;
    }
`;

export const GlobalSearchWrapper = styled.div`
    max-width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;

    input {
        width: 450px;
        border-radius: 8px;
        outline: 1px solid ${({ theme }) => theme.colors.border};
    }
`;
