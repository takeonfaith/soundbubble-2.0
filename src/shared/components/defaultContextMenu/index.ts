import { styled } from 'styled-components';

export const DefaultContextMenuStyled = styled.div`
    padding: 8px 0;

    .admin {
        font-size: 0.6rem;
        background: linear-gradient(45deg, #c633b7, #d2629f);
        color: #fff;
        padding: 2px 4px;
        margin-left: 30px;
        border-radius: 2px;
    }

    button {
        font-weight: 200;
        font-size: 0.9rem;
        gap: 16px;
        justify-content: flex-start;
        padding: 8px 16px;
        border-radius: 0;
        /* opacity: 0.8; */

        svg {
            width: 20px;
            height: 20px;
            opacity: 0.4;
        }
    }
`;
