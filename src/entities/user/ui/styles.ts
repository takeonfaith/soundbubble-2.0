import { Link } from "react-router-dom";
import styled from "styled-components";
import { TOrientation } from "../types";

export const UserItemStyled = styled(Link) <{ $orientation: TOrientation }>`
	display: flex;
	flex-direction: ${({ $orientation }) => $orientation === 'vertical' ? 'column' : 'row'};
	align-items: center;
	gap: ${({ $orientation }) => $orientation === 'vertical' ? '10px' : '12px'};
	text-decoration: none;
	color: #fff;
	width: ${({ $orientation }) => $orientation === 'vertical' ? 'calc(100vw / 11)' : '100%'};
	padding: ${({ $orientation }) => $orientation === 'vertical' ? '0' : '6px'};
	border-radius: ${({theme})=>theme.borderRadius.big};

	&:hover {
		background: ${({ theme }) => theme.colors.lightHover};
	}

	h4 {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: ${({ $orientation }) => $orientation === 'vertical' ? '1rem' : '0.9rem'};
		font-weight: ${({ $orientation }) => $orientation === 'vertical' ? '400' : '300'};
	}

	span {
		color: ${({ theme }) => theme.colors.greyText};
		font-size: 0.75rem;
	}

	@media (max-width: 900px) {
		h4 {
			font-size: 0.7rem;
		}

		span {
			font-size: 0.6rem;
		}
	}
`