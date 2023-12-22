import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const AuthorsStyled = styled.div`
  font-size: 0.8rem;
  opacity: 0.7;
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
`;

export const AuthorStyled = styled(Link)`
  color: #fff;
  opacity: 0.8;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
