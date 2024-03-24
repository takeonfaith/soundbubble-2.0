import styled from "styled-components";

export const SkeletonPageAnimationStyled = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	overflow-y: auto;
`

export const SkeletonSection = styled.div<{ $color: string }>`
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 100;
	background: linear-gradient(360deg, ${({ theme }) => `${theme.colors.pageBackground}, ${theme.colors.pageBackground}, ${theme.colors.pageBackground}`}, transparent);
	background-size: 100% 500%;
	background-position: 0 0;
	pointer-events: none;
	transition: 0.7s background-position, 0.4s opacity;

	opacity: 0;
	overflow: hidden;


	&.loading {
		opacity: 1;
	   background-position: 0 100%;
	}
`

export const ContentSection = styled.div``