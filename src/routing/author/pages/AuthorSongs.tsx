import { VerticalSongsList } from '../../../entities/song/ui/verticalList';
import { userModel } from '../../../entities/user/model';
import { Header } from '../../../layout/header';
import {
    ContentWrapper,
    PageWrapper,
} from '../../../shared/components/pageWrapper';

export const AuthorSongs = () => {
    const [{ user: currentPageUser, songs }] = userModel.useUserPage();
    const queueInfo = {
        listName: currentPageUser?.displayName ?? 'Author',
        listIcon: currentPageUser?.photoURL,
        listUrl: `/author/${currentPageUser?.uid}/songs`,
        songs,
    };

    return (
        <PageWrapper>
            <Header />
            <ContentWrapper>
                <VerticalSongsList {...queueInfo} />
            </ContentWrapper>
        </PageWrapper>
    );
};
