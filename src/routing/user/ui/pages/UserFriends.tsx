import { useUnit } from 'effector-react';
import { translate } from '../../../../i18n';
import { Flex } from '../../../../shared/components/flex';
import { Loading } from '../../../../shared/components/loading';
import {
    ContentWrapper,
    PageWrapper,
} from '../../../../shared/components/pageWrapper';
import { AuthorPageHeader } from '../../../author/ui/pages/AuthorPageHeader';
import { $friends, $pageUser, loadUserPageFx } from '../../model/user-page';
import { UserItem } from '../../../../entities/user/ui';

export const UserFriends = () => {
    const [user, loading, friends] = useUnit([
        $pageUser,
        loadUserPageFx.pending,
        $friends,
    ]);
    return (
        <PageWrapper>
            <ContentWrapper>
                {loading && <Loading />}
                <AuthorPageHeader
                    isAuthor={false}
                    author={user}
                    title={translate('friends')}
                />
                <Flex d="column" width="100%" gap={4}>
                    {friends.map((friend) => {
                        return (
                            <UserItem
                                user={friend}
                                key={friend.uid}
                                orientation="horizontal"
                            />
                        );
                    })}
                </Flex>
            </ContentWrapper>
        </PageWrapper>
    );
};
