import { userModel } from '../../entities/user/model';
import { UserItem } from '../../entities/user/ui';
import { Flex } from '../../shared/components/flex';
import { Loading } from '../../shared/components/loading';
import { PageGridStyled, PageWrapperStyled } from './styles';

export const LikedAuthors = () => {
    const [data, loading] = userModel.useAddedAuthors();

    return (
        <PageWrapperStyled>
            {loading && (
                <Flex width="100%" height="100%" jc="center">
                    <Loading />
                </Flex>
            )}
            <PageGridStyled>
                {data.map((author) => {
                    return <UserItem user={author} key={author.uid} />;
                })}
            </PageGridStyled>
        </PageWrapperStyled>
    );
};
