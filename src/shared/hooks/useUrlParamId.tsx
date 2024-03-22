/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useMatch } from 'react-router'

type Props = {
	page: 'song' | 'playlist' | 'author'
	onChangeId: (id: string) => void
}

export const useUrlParamId = ({ page, onChangeId }: Props) => {
	const match = useMatch(`${page}/:id`)

	useEffect(() => {
		if (match?.params.id) {
			onChangeId(match.params.id)
		}
	}, [match?.params.id])
}