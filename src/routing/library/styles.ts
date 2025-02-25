import styled from 'styled-components';
import { Button } from '../../shared/components/button';
import { MEDIA_QUERIES } from '../../shared/constants/screenSize';

export const PageGridStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    height: fit-content;

    ${MEDIA_QUERIES.isMobile} {
        gap: 0px;
    }
`;

export const AuthorPageGridStyled = styled(PageGridStyled)`
    gap: 32px;

    ${MEDIA_QUERIES.isMobile} {
        gap: 4px;
    }
`;

export const SearchButton = styled(Button)`
    min-width: 38px;
    min-height: 38px;
    width: 38px;
    height: 38px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.pageBackground2};

    svg {
        opacity: 1;
        width: 18px;
        height: 18px;
    }

    ${MEDIA_QUERIES.isMobile} {
        min-width: 40px;
        width: 40px;
        height: 40px;

        svg {
            width: 18px;
            height: 18px;
        }
    }
`;
