import { IconDiscountCheckFilled, IconHeadphones, IconInfoCircle, IconLock, IconShare3, IconUserPlus } from '@tabler/icons-react';
import { useTheme } from 'styled-components';
import { LikeButton } from '../../../features/likeButton';
import { ShareModal } from '../../../features/shareModal';
import { modalModel } from '../../../layout/modal/model';
import { formatBigNumber } from '../../funcs/formatBigNumber';
import { Button } from '../button';
import { Flex } from '../flex';
import { PageTopStyled, TopRightCorner } from './styles';

type Props = {
	id: string | undefined
	name: string | undefined;
	numberOfListenersPerMonth: number | undefined;
	subscribers: number | undefined
	imageComponent: React.ReactNode,
	colors: string[] | undefined
	isVerified?: boolean
	isPrivate?: boolean
	subtitle?: React.ReactNode
	bottomButtons?: React.ReactNode
}

export const PageTop = ({ name, subtitle, bottomButtons, isPrivate, numberOfListenersPerMonth, subscribers, imageComponent, colors, isVerified }: Props) => {
	const theme = useTheme()

	const handleClickShare = () => {
		modalModel.events.open({ content: <ShareModal />, title: 'Share with friends' })
	}

	return (
		<PageTopStyled $colors={colors}>
			{imageComponent}
			<Flex gap={8} d='column' ai='center'>
				<Flex gap={4} d='column'>
					<Flex gap={6}>
						<h2>{name}</h2>
						{isVerified && <IconDiscountCheckFilled color={colors?.[1]} />}
						{isPrivate && <IconLock size={20}/>}
					</Flex>
					{subtitle}
				</Flex>
				<Flex gap={20} style={{ opacity: '0.8', fontWeight: '300' }}>
					<Flex gap={4}>
						{formatBigNumber(numberOfListenersPerMonth)}
						<IconHeadphones size={16} />
					</Flex>
					<Flex gap={4}>
						{formatBigNumber(subscribers)}
						<IconUserPlus size={16} />
					</Flex>
				</Flex>
				<TopRightCorner>
					<LikeButton songId={undefined} likeColor={undefined} background={theme.colors.darkHover} height='32px' width='45px' />
					<Button $height='32px' $width='45px' onClick={handleClickShare} $background={theme.colors.darkHover}>
						<IconShare3 size={20} />
					</Button>
					<Button $height='32px' $width='45px' $background={theme.colors.darkHover}>
						<IconInfoCircle size={20} />
					</Button>
				</TopRightCorner>
			</Flex>
			{/* <TopBackground>
				<img src={Wave} />
			</TopBackground> */}
			{bottomButtons}
		</PageTopStyled>
	)
}