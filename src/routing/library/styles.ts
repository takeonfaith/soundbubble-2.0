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
    min-width: 46px;
    width: 46px;
    height: 46px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.pageBackground2};

    svg {
        opacity: 0.7;
        width: 20px;
        height: 20px;
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
