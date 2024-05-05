import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Geologica', sans-serif;
	}

	body {
		color: #fff;
		overflow: hidden;
	}

	input:focus, button:focus, select:focus, textarea:focus, a:focus {
		outline: 1px solid ${({ theme }) => theme.colors.blue.main};
	}
`;
