import { IconMoon, IconSun } from '@tabler/icons-react'
import styled from 'styled-components'
import { toggleTheme, useTheme } from '../../app/theme'
import { Button } from '../../shared/components/button'


const ThemeButtonStyled = styled(Button)`
	min-height: 20px;
	height: 20px;
`

const ThemeButtonIconStyled = styled.div`
	width: 100%;
	height: 40px;
	position: relative;

	& svg {
		transform-origin: center center;
		transition: 0.2s;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	&.light {
		& svg:nth-child(1) {
			transform: translate(-50%, -50%) rotate(0deg);
			opacity: 1;
		}

		& svg:nth-child(2) {
			transform: translate(-50%, -50%) rotate(90deg);
			opacity: 0;
		}
	}
	
	&.dark {
		& svg:nth-child(1) {
			transform: translate(-50%, -50%) rotate(90deg);
			opacity: 0;
		}

		& svg:nth-child(2) {
			transform: translate(-50%, -50%) rotate(0deg);
			opacity: 1;
		}
	}
`

export const ThemeButton = () => {
	const { theme } = useTheme()

	const handleTheme = () => {
		toggleTheme()
	}

	return (
		<ThemeButtonStyled $width='20px' onClick={handleTheme}>
			<ThemeButtonIconStyled className={`theme ${theme.toString()}`}>
				<IconSun size={18} />
				<IconMoon size={18} />
			</ThemeButtonIconStyled>
		</ThemeButtonStyled>
	)
}
