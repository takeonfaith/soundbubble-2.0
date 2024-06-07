import { styled } from "styled-components";

export const CheckIconStyled = styled.div<{ $checked: boolean }>`
	color: ${({ $checked, theme }) => $checked ? theme.colors.blue.action : theme.colors.greyText};
	height: 24px;
`