import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const AuthorsStyled = styled.div<{
    $width?: string;
    $disableOnMobile: boolean;
    $disableOnDesktop: boolean;
}>`
    font-size: 0.8rem;
    font-weight: 300;
    width: ${({ $width }) => $width ?? 'fit-content'};
    opacity: 0.5;
    pointer-events: ${({ $disableOnDesktop }) =>
        $disableOnDesktop ? 'none' : 'all'};

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    cursor: pointer;

    @media (max-width: 1000px) {
        pointer-events: ${({ $disableOnMobile }) =>
            $disableOnMobile ? 'none' : 'all'};
    }
`;

export const AuthorStyled = styled(Link)`
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &:hover {
        text-decoration: underline;
    }
`;
