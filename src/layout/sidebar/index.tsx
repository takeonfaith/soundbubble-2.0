import { Flex } from '@components/flex';
import { IconText } from '@components/iconText';
import { groupByField } from '@shared/funcs/groupByField';
import { usePrivateAction } from '@shared/hooks/usePrivateAction';
import { IconPlus } from '@tabler/icons-react';
import { modalModel } from 'layout/modal/model';
import { menuRoutes } from 'routing/routes';
import { PlaylistItem } from '../../entities/playlist/ui';
import { userModel } from '../../entities/user/model';
import { CreatePlaylistModal } from '../../features/createPlaylistModal';
import { Button } from '../../shared/components/button';
import { NavigationTitle } from '../../shared/components/navigationTitle';
import { Subtext } from '../../shared/components/subtext';
import {
    NotificationBadge,
    PlaylistsStyled,
    SidebarLink,
    SidebarSection,
    SidebarSectionTitle,
    SidebarStyled,
} from './styles';
import { chatModel } from '../../entities/chat/model';

export const Sidebar = () => {
    const preparedRoutes = groupByField(menuRoutes, 'section');
    const { loggedIn } = usePrivateAction();
    const [ownPlaylists] = userModel.useOwnPlaylists();
    const [, , awaiting] = userModel.useFriends();
    const [currentUser] = userModel.useUser();
    const [unreadMap] = chatModel.useUnread();

    const notificationsDic: Record<string, number> = {
        chat: Object.keys(unreadMap).filter(
            (key) => unreadMap[key].unreadCount > 0
        ).length,
        friends: awaiting.length,
    };

    const handleAddPlaylist = loggedIn(() => {
        modalModel.events.open({
            title: 'Create Playlist',
            content: <CreatePlaylistModal />,
        });
    });

    return (
        <SidebarStyled>
            {Object.keys(preparedRoutes).map((route, index) => {
                return (
                    <SidebarSection key={index}>
                        <SidebarSectionTitle>{route}</SidebarSectionTitle>
                        {preparedRoutes[route].map((link) => {
                            return (
                                <SidebarLink key={link.url} to={link.url}>
                                    <IconText
                                        icon={link.icon}
                                        text={link.title}
                                    />
                                    {!!notificationsDic[link.url] && (
                                        <NotificationBadge>
                                            {notificationsDic[link.url]}
                                        </NotificationBadge>
                                    )}
                                </SidebarLink>
                            );
                        })}
                    </SidebarSection>
                );
            })}

            <SidebarSection>
                <Flex jc="space-between" width="100%">
                    <NavigationTitle
                        showNavigation={!!currentUser}
                        to="/playlists"
                    >
                        <SidebarSectionTitle
                            className={currentUser ? 'clickable' : ''}
                        >
                            Your Playlists
                        </SidebarSectionTitle>
                    </NavigationTitle>

                    <Button
                        className="add-playlist"
                        onClick={handleAddPlaylist}
                    >
                        <IconPlus />
                    </Button>
                </Flex>
                <PlaylistsStyled>
                    {ownPlaylists.length === 0 && (
                        <Subtext style={{ padding: '8px', fontSize: '0.9rem' }}>
                            No Playlists
                        </Subtext>
                    )}
                    {ownPlaylists?.slice(0, 4)?.map((playlist) => (
                        <PlaylistItem
                            isAuthor={true}
                            orientation="horizontal"
                            playlist={playlist}
                            key={playlist.id}
                        />
                    ))}
                </PlaylistsStyled>
            </SidebarSection>
        </SidebarStyled>
    );
};
