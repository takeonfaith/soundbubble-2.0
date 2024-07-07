import { IconMessage2, IconSearch } from '@tabler/icons-react';
import { userModel } from '../../entities/user/model';
import { UserItem } from '../../entities/user/ui';
import { UserListSkeleton } from '../../entities/user/ui/UserListSkeleton';
import { Header } from '../../layout/header';
import { Button } from '../../shared/components/button';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import {
    ContentWrapper,
    PageWrapper,
} from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { styled } from 'styled-components';

const FriendsWrapper = styled.div`
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    display: flex;
    gap: 10px;
	 align-items: center;
`;

export const FriendsPage = () => {
    const [friends, loading] = userModel.useFriends();

    return (
        <PageWrapper>
            <Header>
                <FriendsWrapper>
                    <Input
                        placeholder="Search for friends..."
                        icon={<IconSearch />}
                    />
                    <DefaultButton width="200px" appearance="primary">
                        Create group chat
                    </DefaultButton>
                </FriendsWrapper>
            </Header>
            <ContentWrapper>
                <FriendsWrapper>
                    <SkeletonPageAnimation
                        loading={loading}
                        skeleton={<UserListSkeleton orientation="horizontal" />}
                    >
                        <Flex d="column" gap={4} width="100%">
                            {friends.map((friend) => {
                                return (
                                    <UserItem
                                        showLastSeen
                                        user={friend}
                                        key={friend.uid}
                                        orientation="horizontal"
                                    >
                                        <Button $width="40px">
                                            <IconMessage2 />
                                        </Button>
                                    </UserItem>
                                );
                            })}
                        </Flex>
                    </SkeletonPageAnimation>
                </FriendsWrapper>
            </ContentWrapper>
        </PageWrapper>
    );
};
