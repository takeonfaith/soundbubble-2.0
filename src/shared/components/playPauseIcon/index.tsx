import { IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react'
import { Loading } from '../loading'

type Props = {
	loading: boolean
	playling: boolean
	size?: number
}

// const { currentTime } = songModel.playblack.usePlayback()
// 	const testEQ1 = [16, 20, 7, 19, 15, 9, 11, 12, 18, 17]
// 	const testEQ2 = [6, 13, 8, 15, 18, 11, 16, 20, 10, 7]
// 	const testEQ3 = [7, 6, 5, 14, 11, 19, 8, 16, 13, 20]
// 	return <Flex gap={2}>
// 		<div style={{ borderRadius: '2px', transition: '0.2s ease-in-out', width: '4px', height: `${testEQ1[Math.floor(currentTime % 0.5 * 10 % testEQ1.length)]}px`, background: 'red' }} />
// 		<div style={{ borderRadius: '2px', transition: '0.2s ease-in-out', width: '4px', height: `${testEQ2[Math.floor(currentTime % 0.5 * 10 % testEQ2.length)]}px`, background: 'red' }} />
// 		<div style={{ borderRadius: '2px', transition: '0.2s ease-in-out', width: '4px', height: `${testEQ3[Math.floor(currentTime % 0.5 * 10 % testEQ3.length)]}px`, background: 'red' }} />
// 	</Flex>

export const PlayPauseIcon = ({ loading, playling, size }: Props) => {
	return (
		<>{loading ? (
			<Loading />
		) : playling ? (
			<IconPlayerPauseFilled size={size} />
		) : (
			<IconPlayerPlayFilled size={size} />
		)}</>
	)
}
