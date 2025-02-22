import { useUnit } from 'effector-react';
import { PlaylistItem } from '../../../../entities/playlist/ui';
import { translate } from '../../../../i18n';
import { Loading } from '../../../../shared/components/loading';
import {
    ContentWrapper,
    PageWrapper,
} from '../../../../shared/components/pageWrapper';
import { AuthorPageHeader } from '../../../author/ui/pages/AuthorPageHeader';
import { PageGridStyled } from '../../../library/styles';
import { $pageUser, $playlists, loadUserPageFx } from '../../model/user-page';

export const UserPlaylists = () => {
    const [user, loading, playlists] = useUnit([
        $pageUser,
        loadUserPageFx.pending,
        $playlists,
    ]);

    return (
        <PageWrapper>
            <ContentWrapper>
                <AuthorPageHeader
                    author={user}
                    title={translate('playlists')}
                    isAuthor={false}
                />
                {loading && <Loading />}
                <PageGridStyled>
                    {playlists.map((playlist) => {
                        return (
                            <PlaylistItem
                                playlist={playlist}
                                key={playlist.id}
                                isAuthor={false}
                            />
                        );
                    })}
                </PageGridStyled>
            </ContentWrapper>
        </PageWrapper>
    );
};
