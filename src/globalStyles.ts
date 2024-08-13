import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Geologica', sans-serif;
		-webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
	}

	:root {
		--page-padding: 30px;
		--page-gap: 8px;
		--desktop-page-radius: 14px;
		--player-size: 80px;
		--sidebar-width: 280px;
		--header-height: 70px;

		@media (max-width: 768px) {
			--page-padding: 20px;
		}
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
		border: none;
		background: transparent;
		cursor: pointer;
	}

	input:focus, [type=text]:focus, select:focus, textarea:focus {
		outline: 1px solid ${({ theme }) => theme.colors.blue.main};
	}

	@keyframes generalAppear {
		0%{
			opacity: 0;
			/* transform: scale(0.95); */
		}

		100%{ 
			opacity: 1;
			/* transform: scale(1); */
		}
	}
`;
