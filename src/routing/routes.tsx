import {
    IconDisc,
    IconHeart,
    IconHistory,
    IconMessage,
    IconMicrophone,
    IconMicrophone2,
    IconMusic,
    IconPlaylist,
    IconSearch,
    IconTrendingUp,
    IconUser,
    IconUsers,
    IconVinyl,
    IconWaveSine,
} from '@tabler/icons-react';
import { AuthorPage } from './author';
import { AuthorSongs } from './author/pages/AuthorSongs';
import { SimilarAuthorsPage } from './author/pages/SimilarAuthorsPage';
import { ChatPage } from './chat';
import { ChatDialog } from './chat/ui/layout/ChatDialog';
import { DiscoverPage } from './discover';
import { FriendsPage } from './friends';
import { HistoryPage } from './history';
import { Library } from './library';
import { LikedAuthors } from './library/LikedAuthors';
import { LikedPlaylists } from './library/LikedPlaylists';
import { LikedSongs } from './library/LikedSongs';
import { MePage } from './me';
import { PlaylistPage } from './playlist';
import { SearchPage } from './search';
import { SongPage } from './song';
import { TrendsPage } from './trends/ui';
import { UserPage } from './user';
import { AlbumPage } from './album';
import { TrendsPageAlbums } from './trends/ui/TrendsPageAlbums';
import { TrendsPageSongs } from './trends/ui/TrendsPageSongs';
import { TrendsPageAuthors } from './trends/ui/TrendsPageAuthors';
import { LikedAlbums } from './library/LikedAlbums';
import { UserSongs } from './user/UserSongs';
import { TestPage } from './test';

type Section = 'features' | 'your activities' | 'your music';

export type TRoute = {
    url: string;
    title: string;
    component: React.ReactNode;
    children?: TRoute[];
    section?: Section;
    icon?: React.ReactNode;
    private?: boolean;
    showTitle?: boolean;
    admin?: boolean;
};

export const allRoutes: TRoute[] = [
    {
        url: 'discover',
        title: 'Wave',
        icon: <IconWaveSine />,
        component: <DiscoverPage />,
        section: 'features',
        private: false,
    },
    {
        url: 'search',
        title: 'Search',
        icon: <IconSearch />,
        component: <SearchPage />,
        section: 'features',
        private: false,
        showTitle: false,
    },
    {
        url: 'trends',
        title: 'Trends',
        icon: <IconTrendingUp />,
        component: <TrendsPage />,
        section: 'features',
        private: false,
        children: [
            {
                url: '',
                title: 'Trending Music',
                icon: <IconMusic />,
                component: <TrendsPageSongs />,
                section: 'features',
                private: false,
            },
            {
                url: 'albums',
                title: 'Trending Albums',
                icon: <IconDisc />,
                component: <TrendsPageAlbums />,
                section: 'features',
                private: false,
            },
            {
                url: 'authors',
                title: 'Trending Authors',
                icon: <IconMicrophone2 />,
                component: <TrendsPageAuthors />,
                section: 'features',
                private: false,
            },
        ],
    },
    {
        url: '',
        title: 'Liked',
        icon: <IconHeart />,
        component: <Library />,
        section: 'your music',
        private: true,
        showTitle: false,
        children: [
            {
                url: '',
                title: '',
                icon: <IconMusic />,
                component: <LikedSongs />,
                section: 'your music',
                private: true,
            },
            {
                url: 'playlists',
                title: 'Your Playlists',
                icon: <IconPlaylist />,
                component: <LikedPlaylists />,
                section: 'your music',
                private: true,
            },
            {
                url: 'albums',
                title: 'Liked Albums',
                icon: <IconVinyl />,
                component: <LikedAlbums />,
                section: 'your music',
                private: true,
            },
            {
                url: 'authors',
                title: 'Liked Authors',
                icon: <IconMicrophone2 />,
                component: <LikedAuthors />,
                section: 'your music',
                private: true,
            },
        ],
    },

    {
        url: 'history',
        title: 'History',
        icon: <IconHistory />,
        component: <HistoryPage />,
        section: 'your music',
        private: true,
    },
    {
        url: 'chat',
        title: 'Chat',
        icon: <IconMessage />,
        component: <ChatPage />,
        children: [
            {
                url: ':id',
                title: 'Chat',
                icon: <IconMessage />,
                component: <ChatDialog />,
                section: 'your activities',
                private: true,
                children: [
                    {
                        url: ':id',
                        title: 'Chat',
                        icon: <IconMessage />,
                        component: <ChatDialog />,
                        section: 'your activities',
                        private: true,
                    },
                ],
            },
        ],
        section: 'your activities',
        private: true,
    },
    {
        url: 'friends',
        title: 'Friends',
        icon: <IconUsers />,
        component: <FriendsPage />,
        section: 'your activities',
        private: true,
    },
    {
        url: 'song/:id',
        title: 'Song',
        icon: <IconMusic />,
        component: <SongPage />,
        section: 'your music',
        private: true,
    },
    {
        url: 'playlist/:id',
        title: 'Playlist',
        icon: <IconDisc />,
        component: <PlaylistPage />,
        section: 'your music',
        private: true,
    },
    {
        url: 'album/:id',
        title: 'Album',
        icon: <IconVinyl />,
        component: <AlbumPage />,
        section: 'your music',
        private: true,
    },
    {
        url: 'author/:id',
        title: 'Author',
        icon: <IconMicrophone />,
        component: <AuthorPage />,
        section: 'your music',
        private: true,
    },
    {
        url: 'author/:id/songs',
        title: 'Author songs',
        icon: <IconMusic />,
        component: <AuthorSongs />,
        section: 'your music',
        private: true,
    },
    {
        url: 'author/:id/similar-authors',
        title: 'Similar Authors',
        icon: <IconMicrophone />,
        component: <SimilarAuthorsPage />,
        section: 'your music',
        private: true,
    },
    {
        url: 'user/:id',
        title: 'User',
        icon: <IconUser />,
        component: <UserPage />,
        section: 'your music',
        private: true,
    },
    {
        url: 'user/:id/songs',
        title: 'User Songs',
        icon: <IconMusic />,
        component: <UserSongs />,
        section: 'your music',
        private: true,
    },
    {
        url: 'user/:id',
        title: 'User',
        icon: <IconUser />,
        component: <UserPage />,
        section: 'your music',
        private: true,
    },
    {
        url: 'me',
        title: 'Me',
        icon: <IconUser />,
        component: <MePage />,
        section: 'your music',
        private: true,
    },
    {
        url: 'test',
        title: 'Test',
        component: <TestPage />,
        admin: true,
    },
] as const;

const getRoutes = <T extends (typeof allRoutes)[number]['title'][]>(
    keys: T
) => {
    const result = [];

    for (let k = 0; k < keys.length; k++) {
        const element = keys[k];
        const found = allRoutes.find((route) => route.title === element);

        if (found) {
            result.push(found);
        }
    }

    return result;
};

export const menuRoutes = getRoutes([
    'Wave',
    'Trends',
    'Liked',
    'History',
    'Chat',
    'Friends',
    'Settings',
]);

export const mobileMenuRoutes = getRoutes([
    'Wave',
    'Trends',
    'Liked',
    'Chat',
    'Search',
]);
