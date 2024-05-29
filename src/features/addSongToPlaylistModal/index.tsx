import { PlaylistItem } from "../../entities/playlist/ui"
import { userModel } from "../../entities/user/model"

export const AddSongToPlaylistModal = () => {
  const [playlists] = userModel.useOwnPlaylists()
  return (
    <div>{playlists.map((playlist) => <PlaylistItem orientation="horizontal" playlist={playlist} key={playlist.id} />)}</div>
  )
}
