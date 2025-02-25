import { IconMicrophone2Off } from '@tabler/icons-react';
import { userModel } from '../../entities/user/model';
import { UserItem } from '../../entities/user/ui';
import { Flex } from '../../shared/components/flex';
import { Loading } from '../../shared/components/loading';
import { PageMessage } from '../../shared/components/pageMessage';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import { AuthorPageGridStyled } from './styles';
import useCurrentDevice from '../../shared/hooks/useCurrentDevice';
import { useTypedTrasnlate } from '../../shared/hooks/useTypedTrasnlate';

export const LikedAuthors = () => {
    const [addedAuthors, loading] = userModel.useAddedAuthors();
    const { isMobile } = useCurrentDevice();
    const translate = useTypedTrasnlate();

    return (
        <ContentWrapper>
            {loading && (
                <Flex width="100%" height="100%" jc="center">
                    <Loading />
                </Flex>
            )}
            {!loading && !addedAuthors.length && (
                <Flex height="100%" width="100%" jc="center" padding="20vh">
                    <PageMessage
                        icon={IconMicrophone2Off}
                        title={translate('no_authors_added')}
                        description={translate('no_authors_added_subtext')}
                    />
                </Flex>
            )}
            <AuthorPageGridStyled>
                {addedAuthors.map((author) => {
                    return (
                        <UserItem
                            orientation={isMobile ? 'horizontal' : 'vertical'}
                            user={author}
                            key={author.uid}
                        />
                    );
                })}
            </AuthorPageGridStyled>
        </ContentWrapper>
    );
};
