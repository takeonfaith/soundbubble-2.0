import { userModel } from '../../entities/user/model';
import { UserItem } from '../../entities/user/ui';
import { Flex } from '../../shared/components/flex';
import { Loading } from '../../shared/components/loading';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import { AuthorPageGridStyled } from './styles';

export const LikedAuthors = () => {
    const [data, loading] = userModel.useAddedAuthors();

    return (
        <ContentWrapper>
            {loading && (
                <Flex width="100%" height="100%" jc="center">
                    <Loading />
                </Flex>
            )}
            <AuthorPageGridStyled>
                {data.map((author) => {
                    return <UserItem user={author} key={author.uid} />;
                })}
            </AuthorPageGridStyled>
        </ContentWrapper>
    );
};
