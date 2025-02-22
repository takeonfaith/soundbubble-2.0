import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { useMatch } from 'react-router';
import { UserItem } from '../../../../entities/user/ui';
import {
    ContentWrapper,
    PageWrapper,
} from '../../../../shared/components/pageWrapper';
import { AuthorPageGridStyled } from '../../../library/styles';
import {
    $pageAuthor,
    $similarAuthors,
    getAuthorPageById,
    loadAuthorPageFx,
} from '../../model';
import { AuthorPageHeader } from './AuthorPageHeader';
import { Loading } from '../../../../shared/components/loading';

export const SimilarAuthorsPage = () => {
    const [author, similarAuthors, isLoading] = useUnit([
        $pageAuthor,
        $similarAuthors,
        loadAuthorPageFx.pending,
    ]);
    const match = useMatch(`author/:id/similar-authors`);
    const id = match?.params.id;

    useEffect(() => {
        if (id) {
            getAuthorPageById({
                userId: id,
                allSongs: true,
            });
        }
    }, [id]);

    return (
        <PageWrapper>
            <ContentWrapper>
                <AuthorPageHeader title="similar authors" author={author} />
                {isLoading && <Loading />}
                <AuthorPageGridStyled>
                    {similarAuthors.map((author) => {
                        return <UserItem user={author} key={author.uid} />;
                    })}
                </AuthorPageGridStyled>
            </ContentWrapper>
        </PageWrapper>
    );
};
