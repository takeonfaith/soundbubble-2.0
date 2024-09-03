import {
    IconBrandSafari,
    IconDisc,
    IconHeart,
    IconHistory,
    IconMessage,
    IconMicrophone,
    IconMicrophone2,
    IconMusic,
    IconSearch,
    IconTrendingUp,
    IconUser,
    IconUsers,
    IconVinyl,
} from '@tabler/icons-react';
import { AuthorPage } from './author';
import { AuthorSongs } from './author/pages/AuthorSongs';
import { SimilarAuthorsPage } from './author/pages/SimilarAuthorsPage';
import { ChatPage } from './chat';
import { ChatDialog } from './chat/ChatDialog/ChatDialog';
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
import { TrendsPage } from './trends';
import { UserPage } from './user';

type Section = 'features' | 'your activities' | 'your music';

export type TRoute = {
    url: string;
    title: string;
    component: React.ReactNode;
    children?: TRoute[];
    section?: Section;
    icon?: React.ReactNode;
    private?: boolean;
};

export const allRoutes: TRoute[] = [
    {
        url: 'discover',
        title: 'Discover',
        icon: <IconBrandSafari />,
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
    },
    {
        url: 'trends',
        title: 'Trends',
        icon: <IconTrendingUp />,
        component: <TrendsPage />,
        section: 'features',
        private: false,
    },
    {
        url: '',
        title: 'Liked',
        icon: <IconHeart />,
        component: <Library />,
        section: 'your music',
        private: true,
        children: [
            {
                url: '',
                title: 'Liked Songs',
                icon: <IconMusic />,
                component: <LikedSongs />,
                section: 'your music',
                private: true,
            },
            {
                url: 'playlists',
                title: 'Liked Playlists',
                icon: <IconVinyl />,
                component: <LikedPlaylists />,
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
        url: 'author/:id',
        title: 'Author',
        icon: <IconMicrophone />,
        component: <AuthorPage />,
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
        url: 'me',
        title: 'Me',
        icon: <IconUser />,
        component: <MePage />,
        section: 'your music',
        private: true,
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
    'Discover',
    'Search',
    'Trends',
    'Liked',
    'History',
    'Chat',
    'Friends',
    'Settings',
]);

export const mobileMenuRoutes = getRoutes([
    'Discover',
    'Liked',
    'Chat',
    'Search',
]);
