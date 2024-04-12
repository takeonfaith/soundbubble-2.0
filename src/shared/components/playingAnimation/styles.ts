import styled from "styled-components";

const getPlayingAnimation = () => {
	const heights = [10, 15, 8, 6, 12, 14, 7, 13, 10, 5, 9, 11]

	const result = `@keyframes playing {
		${heights.map((h, i) => {
		const percent = 100 / heights.length * i + "%"
		return `${percent} {
			height: ${h}px;
		}`
	})}
	}`

	return result
}

export const PlayingAnimationStyled = styled.div<{ $color: string }>`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	gap: 3px;
	width: 15px;
	height: 15px;
	animation-play-state: paused;

	& div {
		background: ${({ $color }) => $color ?? 'white'};
	}

	& div:nth-child(1) {
		animation-delay: 0s;
	}

	& div:nth-child(2) {
		animation-delay: 0.2s;
	}

	& div:nth-child(3) {
		animation-delay: 0.4s;
	}

	.playing {
		& div {
			animation-play-state: running;
		}
	}

`

export const PlayingAnimationItem = styled.div`
	width: 2.5px;
	animation: playing 3s infinite linear;
	height: 12px;
	border-radius: 2px;

	${getPlayingAnimation()}
`