import { IconDiscountCheckFilled, IconDots, IconHeadphones, IconHeart, IconUserPlus } from '@tabler/icons-react';
import { Wave } from '../../images';
import { Button } from '../button';
import { Flex } from '../flex';
import { PageTopStyled, TopBackground, TopRightCorner } from './styles';

type Props = {
	id: string | undefined
	name: string | undefined;
	numberOfListenersPerMonth: number | undefined;
	subscribers: number | undefined
	imageComponent: React.ReactNode,
	colors: string[] | undefined
	isVerified?: boolean
	playButtonLoading: boolean
	shuffleButtonLoading: boolean
	subtitle?: React.ReactNode
	onPlay: () => void
	onShuffle: () => void
	bottomButtons?: React.ReactNode
}

export const PageTop = ({ name, subtitle, bottomButtons, numberOfListenersPerMonth, subscribers, imageComponent, colors, isVerified }: Props) => {
	return (
		<PageTopStyled $colors={colors}>
			{imageComponent}
			<Flex gap={8} d='column' ai='center'>
				<Flex gap={4} d='column'>
					<Flex gap={4}>
						<h2>{name}</h2>
						{isVerified && <IconDiscountCheckFilled color={colors?.[1]} />}
					</Flex>
					{subtitle}
				</Flex>
				<Flex gap={20} style={{ opacity: '0.8', fontWeight: '300' }}>
					<Flex gap={4}>
						{numberOfListenersPerMonth}
						<IconHeadphones size={16} />
					</Flex>
					<Flex gap={4}>
						{subscribers}
						<IconUserPlus size={16} />
					</Flex>
				</Flex>
				<TopRightCorner>
					<Button $width='40px'>
						<IconHeart size={20} />
					</Button>
					<Button $width='40px'>
						<IconDots size={20} />
					</Button>
				</TopRightCorner>
			</Flex>
			<TopBackground>
				<img src={Wave} />
			</TopBackground>
			{bottomButtons}
		</PageTopStyled>
	)
}