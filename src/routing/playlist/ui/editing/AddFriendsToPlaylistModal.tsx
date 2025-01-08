import { playlistModel } from '../../../../entities/playlist/model';
import { createUserObject } from '../../../../entities/user/lib/createUserObject';
import { userModel } from '../../../../entities/user/model';
import { TUser } from '../../../../entities/user/model/types';
import { UserItem } from '../../../../entities/user/ui';
import { AddEntitiesUI } from '../../../../features/addEntitiesUI';
import { modalModel } from '../../../../layout/modal/model';
import { Button } from '../../../../shared/components/button';
import { DefaultButton } from '../../../../shared/components/button/DefaultButton';
import { CheckIcon } from '../../../../shared/components/checkIcon';
import { Flex } from '../../../../shared/components/flex';

export const AddFriendsToPlaylistModal = () => {
    const [currentPlaylist] = playlistModel.usePlaylist();
    const [friends] = userModel.useFriends();
    const [currentUser] = userModel.useUser();
    const isOwner = currentPlaylist?.ownerId === currentUser?.uid;

    const handleSendRequest = (added: TUser[]) => {
        return () => {
            const reallyNewParticipants = added.filter(
                (u) => !currentPlaylist?.authors.find((a) => a.uid === u.uid)
            );

            if (reallyNewParticipants.length > 0) {
                playlistModel.events.sendPlaylistInvitation(
                    reallyNewParticipants
                );
            }

            modalModel.events.close();
        };
    };

    return (
        <Flex d="column" gap={4} padding="20px" width="100%">
            <AddEntitiesUI
                entities={friends}
                initiallyAddedItems={
                    currentPlaylist?.authors.map((a) => createUserObject(a)) ??
                    []
                }
                inputPlaceholder={'Search for friends'}
                renderItem={(user, checked, onClick, initiallyChecked) => {
                    return (
                        <UserItem
                            user={user}
                            key={user.uid}
                            as="button"
                            orientation="horizontal"
                            onClick={
                                isOwner || user.uid !== currentPlaylist?.ownerId
                                    ? onClick
                                    : undefined
                            }
                            showLastSeen
                        >
                            <Button $width="50px">
                                <CheckIcon
                                    checked={checked}
                                    type={
                                        initiallyChecked ? 'minus' : 'checkbox'
                                    }
                                />
                            </Button>
                        </UserItem>
                    );
                }}
                renderButton={(addedItems) => {
                    return (
                        <DefaultButton
                            appearance="primary"
                            onClick={handleSendRequest(addedItems)}
                            disabled={addedItems.length === 0}
                        >
                            Done
                        </DefaultButton>
                    );
                }}
            />
        </Flex>
    );
};
