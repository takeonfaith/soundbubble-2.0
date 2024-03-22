import { IconCamera } from '@tabler/icons-react'
import styled from 'styled-components'
import { DefaultButton } from '../../shared/components/button/DefaultButton'
import { Flex } from '../../shared/components/flex'
import { Input } from '../../shared/components/input'
import { useState } from 'react'

const DownloadPhotoStyled = styled.label`
	width: 255px;
	height: 255px;
	border-radius: ${({ theme }) => theme.borderRadius.middle};
	background: ${({ theme }) => theme.colors.pageBackground};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.2s background;

	input[type=file] {
		display: none;
	}

	&:hover {
		background: ${({ theme }) => theme.colors.hover};
	}
`

const CenterButton = styled.div`
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	background: ${({ theme }) => theme.colors.blue.action};
	box-shadow: 0 4px 50px ${({ theme }) => theme.colors.blue.action} ;

	svg {
		width: 30px;
		height: 30px;
	}
`

const DownloadPhoto = () => {
	const [photo, setPhoto] = useState<File | null>(null)

	const handleFile = (e)=>{
		setPhoto()
	}

	return <DownloadPhotoStyled>
		<input type="file" onChange={handleFile}/>
		<CenterButton>
			<IconCamera />
		</CenterButton>
	</DownloadPhotoStyled>
}

export const AddPlaylistModal = () => {
	return (
		<Flex d='column' gap={20} width='100%'>
			<DownloadPhoto />
			<Input required placeholder='Enter name' label='Playlist name' />
			<DefaultButton appearance='primary' >Create</DefaultButton>
		</Flex >
	)
}
