import { IconMicrophone2Off } from '@tabler/icons-react';
import { userModel } from '../../entities/user/model';
import { UserItem } from '../../entities/user/ui';
import { Flex } from '../../shared/components/flex';
import { Loading } from '../../shared/components/loading';
import { PageMessage } from '../../shared/components/pageMessage';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import { AuthorPageGridStyled } from './styles';

export const LikedAuthors = () => {
    const [addedAuthors, loading] = userModel.useAddedAuthors();

    return (
        <ContentWrapper>
            {loading && (
                <Flex width="100%" height="100%" jc="center">
                    <Loading />
                </Flex>
            )}
            {!addedAuthors.length && (
                <PageMessage
                    icon={IconMicrophone2Off}
                    title={'No authors added'}
                    description={
                        'They will appear here if you subscribe or add song'
                    }
                />
            )}
            <AuthorPageGridStyled>
                {addedAuthors.map((author) => {
                    return <UserItem user={author} key={author.uid} />;
                })}
            </AuthorPageGridStyled>
        </ContentWrapper>
    );
};
