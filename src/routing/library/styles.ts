import styled from 'styled-components';
import { Button } from '../../shared/components/button';

export const PageGridStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    height: fit-content;

    @media (max-width: 768px) {
        gap: 20px;
    }
`;

export const AuthorPageGridStyled = styled(PageGridStyled)`
    gap: 32px;

    @media (max-width: 768px) {
        gap: 20px;
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

    @media (max-width: 768px) {
        min-width: 40px;
        width: 40px;
        height: 40px;

        svg {
            width: 18px;
            height: 18px;
        }
    }
`;
