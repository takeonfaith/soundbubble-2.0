import styled from 'styled-components';
import { Button } from '../button';

export const SelectStyled = styled(Button)`
    padding: 0 10px;
    background: ${({ theme }) => theme.colors.input};
    justify-content: space-between;
    width: 220px;
    outline: 1px solid ${({ theme }) => theme.colors.border};

    &:hover {
        background: ${({ theme }) => theme.colors.hover};
    }

    &.has-error {
        outline: 1px solid ${({ theme }) => theme.scheme.red.text};
        background: ${({ theme }) => theme.scheme.red.transparent};
    }

    & .placeholder {
        opacity: 0.6;
        font-weight: 300;
        font-size: 0.9rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    svg {
        opacity: 0.6;
        min-width: 18px;
        width: 18px;
        height: 18px;

        &.chevron {
            min-width: 16px;
            height: 18px;
        }
    }
`;

export const SelectItemsStyled = styled.div`
    padding: 4px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 220px;
`;

export const SelectItemStyled = styled(Button)`
    padding: 6px 10px;
    height: fit-content;
    max-height: none;
    border-radius: 4px;
    justify-content: space-between;
    gap: 0;

    svg {
        width: 20px;
        height: 20px;

        &.check {
            color: ${({ theme }) => theme.scheme.blue.action};
        }
    }

    & .select-item-title {
        font-size: 0.9rem;
        font-weight: 300;
    }
`;
