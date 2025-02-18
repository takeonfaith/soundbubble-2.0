import { Flex } from '@components/flex';
import { IconText } from '@components/iconText';
import { groupByField } from '@shared/funcs/groupByField';
import { usePrivateAction } from '@shared/hooks/usePrivateAction';
import { IconPlus } from '@tabler/icons-react';
import { modalModel } from 'layout/modal/model';
import { menuRoutes } from 'routing/routes';
import { chatModel } from '../../entities/chat/model';
import { PlaylistItem } from '../../entities/playlist/ui';
import { userModel } from '../../entities/user/model';
import { CreatePlaylistModal } from '../../features/createPlaylistModal';
import { Button } from '../../shared/components/button';
import { Divider } from '../../shared/components/divider';
import { NavigationTitle } from '../../shared/components/navigationTitle';
import Popover from '../../shared/components/popover';
import { Subtext } from '../../shared/components/subtext';
import {
    NotificationBadge,
    PlaylistsStyled,
    SidebarLink,
    SidebarSection,
    SidebarSectionTitle,
    SidebarStyled,
} from './styles';

type Props = {
    collapsed: boolean;
};

export const Sidebar = ({ collapsed }: Props) => {
    const preparedRoutes = groupByField(menuRoutes, 'section');
    const { loggedIn } = usePrivateAction();
    const [ownPlaylists] = userModel.useOwnPlaylists();
    const [, , awaiting] = userModel.useFriends();
    const [currentUser] = userModel.useUser();
    const [unreadMap] = chatModel.useUnread();

    const notificationsDic: Record<string, number> = {
        chats: Object.keys(unreadMap).filter(
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
        <SidebarStyled className={collapsed ? 'collapsed' : ''}>
            {Object.keys(preparedRoutes).map((route, index) => {
                return (
                    <SidebarSection key={index}>
                        <SidebarSectionTitle>{route}</SidebarSectionTitle>
                        {preparedRoutes[route].map((link) => {
                            return (
                                <Popover
                                    content={collapsed ? link.title : null}
                                    position="right"
                                >
                                    <SidebarLink key={link.url} to={link.url}>
                                        <IconText
                                            icon={link.icon}
                                            text={link.title}
                                        />
                                        {!!notificationsDic[link.url] && (
                                            <NotificationBadge background="blue">
                                                {notificationsDic[link.url]}
                                            </NotificationBadge>
                                        )}
                                    </SidebarLink>
                                </Popover>
                            );
                        })}
                        {collapsed && <Divider />}
                    </SidebarSection>
                );
            })}

            <SidebarSection>
                <Flex jc="space-between" width="100%">
                    <NavigationTitle
                        showNavigation={!!currentUser && !collapsed}
                        to="/playlists"
                    >
                        <SidebarSectionTitle
                            className={currentUser ? 'clickable' : ''}
                        >
                            Your Playlists
                        </SidebarSectionTitle>
                    </NavigationTitle>

                    <Popover
                        content={
                            <>
                                Create playlist <kbd>n</kbd>
                            </>
                        }
                        position={collapsed ? 'right' : 'top'}
                    >
                        <Button
                            className="add-playlist"
                            onClick={handleAddPlaylist}
                        >
                            <IconPlus />
                        </Button>
                    </Popover>
                </Flex>
                <PlaylistsStyled>
                    {ownPlaylists.length === 0 && (
                        <Subtext
                            className="no-playlists"
                            style={{ padding: '8px', fontSize: '0.9rem' }}
                        >
                            No Playlists
                        </Subtext>
                    )}
                    {ownPlaylists?.slice(0, 4)?.map((playlist) => (
                        <Popover
                            content={collapsed ? playlist.name : null}
                            position="right"
                            key={playlist.id}
                        >
                            <PlaylistItem
                                isAuthor={true}
                                orientation="horizontal"
                                playlist={playlist}
                                hideAuthors
                            />
                        </Popover>
                    ))}
                </PlaylistsStyled>
            </SidebarSection>
        </SidebarStyled>
    );
};
