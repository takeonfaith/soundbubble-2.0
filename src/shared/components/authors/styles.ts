import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const AuthorsStyled = styled.div<{ $width?: string }>`
    font-size: 0.8rem;
    opacity: 0.7;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 4px;
    width: ${({ $width }) => $width ?? '100%'};
`;

export const AuthorStyled = styled(Link)`
    opacity: 0.8;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &:hover {
        text-decoration: underline;
    }
`;
