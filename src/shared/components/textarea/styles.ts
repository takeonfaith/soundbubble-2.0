import styled from "styled-components";

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const TextareaStyled = styled.textarea`
  border: none;
  background: ${({ theme }) => theme.colors.input};
  padding: 10px 10px;
  width: 100%;
  resize: none;
  min-height: 300px;
  outline: none;
  color: #fff;
  font-weight: 300;
  border-radius: ${({ theme }) => theme.borderRadius.mild};
`