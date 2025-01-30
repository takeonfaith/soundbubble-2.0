import { TPlaylist } from '../../entities/playlist/model/types';
import { PlaylistItem } from '../../entities/playlist/ui';
import { userModel } from '../../entities/user/model';
import { HorizontalList } from '../../shared/components/horizontalList';
import { NavigationTitle } from '../../shared/components/navigationTitle';
import { SectionStyled } from '../user/styles';
import { MAX_PLAYLISTS } from './constants';

type Props = {
    uid: string | undefined;
    title?: string;
    playlists: TPlaylist[];
};

export const Playlists = ({ title, uid, playlists }: Props) => {
    const [currentUser] = userModel.useUser();

    if (!playlists || playlists.length === 0) {
        return null;
    }

    return (
        <SectionStyled>
            <div className="title">
                <NavigationTitle
                    showNavigation={playlists.length > MAX_PLAYLISTS}
                    to={`/authors/${uid}/playlists`}
                >
                    <h3>{title}</h3>
                </NavigationTitle>
            </div>
            <HorizontalList>
                {playlists.slice(0, MAX_PLAYLISTS).map((album) => {
                    const isAuthor =
                        !!currentUser &&
                        !!album.authors.find((a) => a.uid === currentUser.uid);

                    return (
                        <PlaylistItem
                            isAuthor={isAuthor}
                            playlist={album}
                            key={album.id}
                        />
                    );
                })}
            </HorizontalList>
        </SectionStyled>
    );
};
