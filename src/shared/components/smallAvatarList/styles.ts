import styled from 'styled-components';

export const SmallAvatarListStyled = styled.div`
    display: flex;
    align-items: center;

    & .general-cover {
        outline: 2px solid ${({ theme }) => theme.colors.pageBackground};
    }

    & .general-cover:nth-child(1) {
        transform: translateX(-10px);
    }

    & .general-cover:nth-child(2) {
        transform: translateX(-15px);
    }

    & .general-cover:nth-child(3) {
        transform: translateX(-20px);
    }
`;
