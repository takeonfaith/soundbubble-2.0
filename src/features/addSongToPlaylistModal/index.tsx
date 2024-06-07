import { useState } from "react"
import { playlistModel } from "../../entities/playlist/model"
import { TPlaylist } from "../../entities/playlist/model/types"
import { PlaylistItem } from "../../entities/playlist/ui"
import { PlaylistCover } from "../../entities/playlist/ui/PlaylistCover"
import { TSong } from "../../entities/song/model/types"
import { userModel } from "../../entities/user/model"
import { AddedItemsList } from "../../shared/components/addedItemsList"
import { DefaultButton } from "../../shared/components/button/DefaultButton"
import { CheckIcon } from "../../shared/components/checkIcon"
import { Flex } from "../../shared/components/flex"
import { BadgeStyled, ButtonWrapper } from "../shareModal/styles"
import { Button } from "../../shared/components/button"
import { IconPlus } from "@tabler/icons-react"
import styled from "styled-components"
import { PLAYLIST_RADIUS } from "../../entities/playlist/constants"

type Props = {
  song: TSong | null
}

const AddPlaylistButton = styled(Button)`
  font-size: 0.9rem;
  padding: 7px;
  gap: 12px;
  font-weight: 300;
`

const IconStyled = styled.div`
  width: 35px;
  height: 35px;
  border-radius: ${PLAYLIST_RADIUS};
  background: ${({ theme }) => theme.colors.pageBackground2};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.blue.action};
  
  svg {
    width: 20px;
    height: 20px;
  }
`

export const AddSongToPlaylistModal = ({ song }: Props) => {
  const [playlists] = userModel.useOwnPlaylists()
  const [searchValue, setSearchValue] = useState('')
  const [visiblePlaylists, setVisiblePlaylists] = useState(playlists)
  const [addedPlaylists, setAddedPlaylists] = useState<string[]>(song ? playlists.filter(p => p.songs.includes(song?.id)).map(p => p.id) : [])
  const [loading] = playlistModel.useAddingSongToPlaylists()

  const handleClick = (playlist: TPlaylist, e: Evt<'a'>) => {
    e.preventDefault()
    const isChosen = addedPlaylists.find(p => p === playlist.id)
    if (isChosen) {
      setAddedPlaylists(prev => prev.filter(id => id !== playlist.id))
    } else {
      setAddedPlaylists(prev => [...prev, playlist.id])
      if (searchValue.length !== 0) {
        setSearchValue('')
        setVisiblePlaylists(playlists)
      }
    }
  }

  const handleAdd = () => {
    if (!song) return

    playlistModel.events.addSongToPlaylists({
      songId: song.id,
      playlistIds: addedPlaylists
    })
  }

  return (
    <Flex width="100%" d="column" padding="0 25px">
      <AddedItemsList
        inputPlaceholder={"Search for playlists..."}
        added={addedPlaylists}
        allItems={playlists}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        itemImage={(playlist) => <PlaylistCover color={'grey'} src={playlist.image} size={'18px'} isAlbum={playlist.isAlbum} />}
        itemName={(playlist) => playlist.name}
        setAdded={setAddedPlaylists}
        setVisibleItems={setVisiblePlaylists}
      />

      <AddPlaylistButton $align="left">
        <IconStyled>
          <IconPlus />
        </IconStyled>
        New Playlist
      </AddPlaylistButton>
      {visiblePlaylists.map((playlist) => {
        const checked = !!addedPlaylists.find(p => p === playlist.id)

        return <PlaylistItem onClick={handleClick} orientation="horizontal" playlist={playlist} key={playlist.id} >
          <CheckIcon checked={checked} />
        </PlaylistItem>
      })}
      <ButtonWrapper className={addedPlaylists.length > 0 ? 'open' : ''}>
        <DefaultButton appearance='primary' onClick={handleAdd} loading={loading}>
          Add to
          <BadgeStyled>{addedPlaylists.length}</BadgeStyled>
          playlist
        </DefaultButton>
      </ButtonWrapper>
    </Flex>
  )
}
