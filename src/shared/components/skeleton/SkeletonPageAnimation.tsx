import React from 'react'
import { SkeletonPageAnimationStyled, SkeletonSection, ContentSection } from './styles'

type Props = {
	children: React.ReactNode
	skeleton: React.ReactNode
	loading: boolean
	color: string
}

export const SkeletonPageAnimation = ({ color, loading, children, skeleton }: Props) => {
	return (
		<SkeletonPageAnimationStyled>
			<SkeletonSection $color={color} className={loading ? 'loading' : ''}>
				{skeleton}
			</SkeletonSection>
			<ContentSection>
				{children}
			</ContentSection>
		</SkeletonPageAnimationStyled>
	)
}