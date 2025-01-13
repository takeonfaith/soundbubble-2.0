import { PlaylistItem } from '../../entities/playlist/ui';
import { userModel } from '../../entities/user/model';
import { HorizontalList } from '../../shared/components/horizontalList';
import { NavigationTitle } from '../../shared/components/navigationTitle';
import { SectionStyled } from '../user/styles';
import { MAX_PLAYLISTS } from './constants';

type Props = {
    uid: string | undefined;
    title?: string;
};

export const Playlists = ({ title, uid }: Props) => {
    const [{ playlists }] = userModel.useUserPage();
    const [currentUser] = userModel.useUser();

    if (playlists.length === 0) {
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
                {playlists.slice(0, MAX_PLAYLISTS).map((playlist) => {
                    const isAuthor =
                        !!currentUser &&
                        !!playlist.authors.find(
                            (a) => a.uid === currentUser.uid
                        );

                    return (
                        <PlaylistItem
                            isAuthor={isAuthor}
                            playlist={playlist}
                            key={playlist.id}
                        />
                    );
                })}
            </HorizontalList>
        </SectionStyled>
    );
};
