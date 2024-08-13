import { PlaylistItem } from '../../entities/playlist/ui';
import { userModel } from '../../entities/user/model';
import { HorizontalList } from '../../shared/components/horizontalList';
import { NavigationTitle } from '../../shared/components/navigationTitle';
import { MAX_PLAYLISTS } from './constants';
import { PlaylistsStyled } from './styles';

type Props = {
    uid: string | undefined;
};

export const Playlists = ({ uid }: Props) => {
    const { playlists } = userModel.useUserPage();

    if (playlists.length === 0) {
        return null;
    }

    return (
        <PlaylistsStyled>
            <div className="title">
                <NavigationTitle
                    showNavigation={playlists.length > MAX_PLAYLISTS}
                    to={`/authors/${uid}/playlists`}
                >
                    <h3>Top Albums</h3>
                </NavigationTitle>
            </div>
            <HorizontalList>
                {playlists.slice(0, MAX_PLAYLISTS).map((playlist) => (
                    <PlaylistItem playlist={playlist} key={playlist.id} />
                ))}
                {/* {playlists.map((playlist) => (
                    <PlaylistItem playlist={playlist} key={playlist.id} />
                ))}
                {playlists.map((playlist) => (
                    <PlaylistItem playlist={playlist} key={playlist.id} />
                ))}
                {playlists.map((playlist) => (
                    <PlaylistItem playlist={playlist} key={playlist.id} />
                ))} */}
            </HorizontalList>
        </PlaylistsStyled>
    );
};
