import { createQueueObject } from '../../../entities/song/lib/createQueueObject';
import { VerticalSongsList } from '../../../entities/song/ui/verticalList';
import { userModel } from '../../../entities/user/model';
import { Header } from '../../../layout/header';
import {
    ContentWrapper,
    PageWrapper,
} from '../../../shared/components/pageWrapper';

export const AuthorSongs = () => {
    const [{ user, songs }] = userModel.useUserPage();
    const queue = createQueueObject({
        id: user?.uid,
        name: user?.displayName,
        url: `/author/${user?.uid}`,
        songs,
        imageUrl: user?.photoURL,
    });

    return (
        <PageWrapper>
            <Header />
            <ContentWrapper>
                <VerticalSongsList queue={queue} />
            </ContentWrapper>
        </PageWrapper>
    );
};
