import { Flex } from '@components/flex';
import { IconText } from '@components/iconText';
import { Logo } from '@components/logo';
import { groupByField } from '@shared/funcs/groupByField';
import { usePrivateAction } from '@shared/hooks/usePrivateAction';
import { IconPlus } from '@tabler/icons-react';
import { modalModel } from 'layout/modal/model';
import { menuRoutes } from 'routing/routes';
import { chatModel } from '../../entities/chat/model';
import { PlaylistItem } from '../../entities/playlist/ui';
import { userModel } from '../../entities/user/model';
import { CreatePlaylistModal } from '../../features/createPlaylistModal';
import { ThemeButton } from '../../features/themeButton';
import {
    LogoWrapper,
    NotificationBadge,
    PlaylistsStyled,
    SidebarLink,
    SidebarSection,
    SidebarSectionTitle,
    SidebarStyled,
} from './styles';

export const Sidebar = () => {
    const preparedRoutes = groupByField(menuRoutes, 'section');
    const { loggedIn } = usePrivateAction();
    const [ownPlaylists] = userModel.useOwnPlaylists();
    const chatUnreadCount = chatModel.useChatUnreadCount();

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
                    <SidebarSectionTitle>Your Playlists</SidebarSectionTitle>
                    <button
                        className="add-playlist"
                        onClick={handleAddPlaylist}
                    >
                        <IconPlus />
                    </button>
                </Flex>
                <PlaylistsStyled>
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
