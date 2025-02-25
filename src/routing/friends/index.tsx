import { IconFriendsOff, IconUserOff } from '@tabler/icons-react';
import { styled } from 'styled-components';
import { userModel } from '../../entities/user/model';
import { UserItem } from '../../entities/user/ui';
import { UserListSkeleton } from '../../entities/user/ui/UserListSkeleton';
import { LoginButton } from '../../features/loginButton';
import { OpenChatButton } from '../../features/openChatButton';
import { translate } from '../../i18n';
import { Header } from '../../layout/header';
import { Flex } from '../../shared/components/flex';
import { PageMessage } from '../../shared/components/pageMessage';
import {
    ContentWrapper,
    PageWrapper,
} from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { FriendRequests } from './FriendRequests';

const FriendsWrapper = styled.div`
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
`;

export const FriendsPage = () => {
    const [currentUser] = userModel.useUser();
    const [friends, , awaiting, loading] = userModel.useFriends();

    if (!currentUser)
        return (
            <>
                <PageMessage
                    icon={IconFriendsOff}
                    title={translate('need_to_login')}
                    description={translate('to_add_friends')}
                >
                    <LoginButton />
                </PageMessage>
            </>
        );

    return (
        <PageWrapper>
            <Header />
            <ContentWrapper>
                <FriendsWrapper>
                    <SkeletonPageAnimation
                        loading={loading}
                        skeleton={<UserListSkeleton orientation="horizontal" />}
                    >
                        {!(friends.length || awaiting.length) && (
                            <Flex
                                height="100%"
                                width="100%"
                                jc="center"
                                padding="20vh 0"
                            >
                                <PageMessage
                                    icon={IconUserOff}
                                    title={'No friends'}
                                    description={'We are sorry to say that...'}
                                />
                            </Flex>
                        )}
                        {(friends.length || awaiting.length) > 0 && (
                            <Flex
                                d="column"
                                gap={4}
                                width="100%"
                                ai="flex-start"
                            >
                                <FriendRequests />
                                {friends.map((friend) => {
                                    return (
                                        <UserItem
                                            showLastSeen
                                            user={friend}
                                            key={friend.uid}
                                            orientation="horizontal"
                                        >
                                            <OpenChatButton
                                                userId={friend.uid}
                                                short
                                            />
                                        </UserItem>
                                    );
                                })}
                            </Flex>
                        )}
                    </SkeletonPageAnimation>
                </FriendsWrapper>
            </ContentWrapper>
        </PageWrapper>
    );
};
