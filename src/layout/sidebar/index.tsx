import { Flex } from '@components/flex';
import { IconText } from '@components/iconText';
import { Logo } from '@components/logo';
import { groupByField } from '@shared/funcs/groupByField';
import { usePrivateAction } from '@shared/hooks/usePrivateAction';
import { IconPlus } from '@tabler/icons-react';
import { modalModel } from 'layout/modal/model';
import { useNavigate } from 'react-router';
import { menuRoutes } from 'routing/routes';
import { chatModel } from '../../entities/chat/model';
import { PlaylistItem } from '../../entities/playlist/ui';
import { userModel } from '../../entities/user/model';
import { CreatePlaylistModal } from '../../features/createPlaylistModal';
import { ThemeButton } from '../../features/themeButton';
import { NavigationTitle } from '../../shared/components/navigationTitle';
import {
    LogoWrapper,
    NotificationBadge,
    PlaylistsStyled,
    SidebarLink,
    SidebarSection,
    SidebarSectionTitle,
    SidebarStyled,
} from './styles';
import { Subtext } from '../../shared/components/subtext';
import { Button } from '../../shared/components/button';

export const Sidebar = () => {
    const preparedRoutes = groupByField(menuRoutes, 'section');
    const { loggedIn } = usePrivateAction();
    const [ownPlaylists] = userModel.useOwnPlaylists();
    const chatUnreadCount = chatModel.useChatUnreadCount();
    const navigate = useNavigate();

    const notificationsDic: Record<string, number> = {
        chat: chatUnreadCount,
    };

    const handleAddPlaylist = loggedIn(() => {
        modalModel.events.open({
            title: 'Create Playlist',
            content: <CreatePlaylistModal />,
        });
    });

    return (
        <SidebarStyled>
            <LogoWrapper>
                <Logo />
                <ThemeButton />
            </LogoWrapper>
            {Object.keys(preparedRoutes).map((route, index) => {
                return (
                    <SidebarSection key={index}>
                        <SidebarSectionTitle>{route}</SidebarSectionTitle>
                        {preparedRoutes[route].map((link) => {
                            return (
                                <SidebarLink key={link.url} to={link.url}>
                                    <Flex width="100%" jc="space-between">
                                        <IconText
                                            icon={link.icon}
                                            text={link.title}
                                        />
                                        {!!notificationsDic[link.url] && (
                                            <NotificationBadge>
                                                {notificationsDic[link.url]}
                                            </NotificationBadge>
                                        )}
                                    </Flex>
                                </SidebarLink>
                            );
                        })}
                    </SidebarSection>
                );
            })}

            <SidebarSection>
                <Flex jc="space-between" width="100%">
                    <NavigationTitle showNavigation to="/liked/playlists">
                        <SidebarSectionTitle
                            onClick={() => navigate('/liked/playlists')}
                            className="clickable"
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
