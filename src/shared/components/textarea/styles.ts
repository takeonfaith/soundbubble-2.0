import styled from 'styled-components';

export const TextareaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TextareaStyled = styled.textarea`
    border: none;
    background: ${({ theme }) => theme.colors.input};
    padding: 10px 14px;
    width: 100%;
    resize: none;
    min-height: 40px;
    max-height: 150px;
    outline: none;
    color: ${({ theme }) => theme.colors.textColor};
    font-weight: 300;
    border-radius: ${({ theme }) => theme.borderRadius.big};
    font-size: 0.9rem;
    font-weight: 200;
    line-height: 20px;
`;
