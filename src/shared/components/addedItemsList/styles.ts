import { styled } from 'styled-components';

export const AddedItemsListStyled = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 456px;
    transition: 0.2s;
    position: sticky;
    top: 0;
    padding-bottom: 4px;
    z-index: 20;
    background: ${({ theme }) => theme.colors.modal};

    input {
        width: 100%;
    }
`;
