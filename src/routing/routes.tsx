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
        url: 'liked',
        title: 'Liked',
        icon: <IconHeart />,
        component: <Library />,
        section: 'your music',
        private: true,
        children: [
            {
                url: '',
                title: 'Songs',
                icon: <IconMusic />,
                component: <LikedSongs />,
                section: 'your music',
                private: true,
            },
            {
                url: 'playlists',
                title: 'Playlists',
                icon: <IconVinyl />,
                component: <LikedPlaylists />,
                section: 'your music',
                private: true,
            },
            {
                url: 'authors',
                title: 'Authors',
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
]);

export const mobileMenuRoutes = getRoutes([
    'Discover',
    'Liked',
    'Chat',
    'Search',
]);
