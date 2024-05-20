import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Geologica', sans-serif;
	}

	body {
		color: ${({ theme }) => theme.colors.textColor};
		overflow: hidden;
	}

	a {
		color: ${({ theme }) => theme.colors.textColor};
      text-decoration: none;
	}

	button {
		color: ${({ theme }) => theme.colors.textColor};
	}

	input[type=text]:focus, select:focus, textarea:focus {
		outline: 1px solid ${({ theme }) => theme.colors.blue.main};
	}
`;
