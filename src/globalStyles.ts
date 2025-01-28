import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ collapsed: boolean }>`
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
		--desktop-page-radius: 12px;
		--player-size: 80px;
		--sidebar-width: ${({ collapsed }) => (collapsed ? '90' : '260')}px;
		--sidebar-width-collapsed: 80px;
		--header-height: 70px;


		@media (max-width: 1270px) {
        --player-size: 80px;
    	}

		@media (max-width: 1100px) {
			--sidebar-width: 90px;
		}

		@media (max-width: 1000px) {
			--page-padding: 20px;
			--player-size: 70px
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
		outline: 1px solid ${({ theme }) => theme.scheme.blue.main};
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

	kbd {
		font-weight: 300;
		min-width: 30px;
		min-height: 20px;
		padding: 4px;
		font-family: monospace;
		white-space: nowrap;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
		border: 1px solid ${({ theme }) => theme.colors.border};
		background: ${({ theme }) => theme.colors.input};
		border-radius: 6px;
	}
`;
