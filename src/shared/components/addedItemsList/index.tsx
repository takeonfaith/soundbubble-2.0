import { IconCircleXFilled, IconSearch } from '@tabler/icons-react'
import React from 'react'
import { CompactUser } from '../../../features/shareModal/styles'
import { normalizeString } from '../../funcs/normalizeString'
import { Button } from '../button'
import { Flex } from '../flex'
import { Input } from '../input'
import { AddedItemsListStyled } from './styles'

type Props<T extends { id?: string, uid?: string }> = {
	inputPlaceholder: string
	added: string[]
	allItems: T[]
	searchValue: string
	setSearchValue: React.Dispatch<React.SetStateAction<string>>
	itemImage: (item: T) => React.ReactNode
	itemName: (item: T) => string
	setAdded: React.Dispatch<React.SetStateAction<string[]>>
	setVisibleItems: React.Dispatch<React.SetStateAction<T[]>>
}

export const AddedItemsList = <T extends { id?: string, uid?: string }>({ inputPlaceholder, added, allItems, searchValue, setAdded, setVisibleItems, itemImage, itemName, setSearchValue }: Props<T>) => {

	const handleRemoveChosen = (userId: string) => {
		return () => {
			setAdded(prev => prev.filter(id => id !== userId))
		}
	}

	const handleChange = (e: Evt<'input'>) => {
		console.log({ e: e.target.value });
		setSearchValue(e.target.value)

		if (e.target.value !== undefined && e.target.value.length !== 0) {
			setVisibleItems(() => allItems.filter(item => {
				if (!item) return false

				return normalizeString(itemName(item)).includes(normalizeString(e?.target?.value))
			}))
		} else {
			setVisibleItems(allItems)
		}
	}

	return (
		<AddedItemsListStyled className={added.length > 0 ? 'open' : ''}>
			<Input width={100} placeholder={inputPlaceholder} icon={<IconSearch />} onChange={handleChange} value={searchValue} />
			<Flex wrap="wrap" width="100%" gap={4}>
				{added.map(id => {
					const item = allItems.find(item => (item.id ?? item.uid ?? '') === id);

					if (!item) return null

					return <CompactUser>
						{itemImage(item)}
						{itemName(item)}
						<Button $width="20px" $height="20px" onClick={handleRemoveChosen(id)}>
							<IconCircleXFilled size={18} />
						</Button>
					</CompactUser>
				})}
			</Flex>
		</AddedItemsListStyled>
	)
}