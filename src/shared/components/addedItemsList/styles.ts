import { styled } from 'styled-components';

export const AddedItemsListStyled = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    transition: 0.2s;
    position: sticky;
    top: 0;
    padding-bottom: 4px;
    z-index: 10;
    background: ${({ theme }) => theme.colors.modal};
    padding: 0 6px;
    padding-top: 1px;

    input {
        width: 100%;
    }
`;
