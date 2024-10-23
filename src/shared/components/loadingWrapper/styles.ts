import styled from 'styled-components';

export const LoadingWrapperStyled = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: ${({ theme }) => theme.colors.disabled};
    display: flex;
    align-items: center;
    justify-content: center;
`;
