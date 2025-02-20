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
import {
    ChatsPageLazy,
    FriendsPageLazy,
    HistoryPageLazy,
    PlaylistPageLazy,
    TrendsPageLazy,
} from '.';
import { translate } from '../i18n';
import { AlbumPage } from './album';
import { AuthorPage } from './author';
import { AuthorSongs } from './author/pages/AuthorSongs';
import { SimilarAuthorsPage } from './author/pages/SimilarAuthorsPage';
import { ChatDialog } from './chat/ui/layout/ChatDialog';
import { DiscoverPage } from './discover';
import { Library } from './library';
import { LikedAlbums } from './library/LikedAlbums';
import { LikedAuthors } from './library/LikedAuthors';
import { LikedPlaylists } from './library/LikedPlaylists';
import { LikedSongs } from './library/LikedSongs';
import { SearchPage } from './search';
import { SongPage } from './song';
import { TestPage } from './test';
import { TrendsPageAlbums } from './trends/ui/TrendsPageAlbums';
import { TrendsPageAuthors } from './trends/ui/TrendsPageAuthors';
import { TrendsPagePlaylists } from './trends/ui/TrendsPagePlaylists';
import { TrendsPageSongs } from './trends/ui/TrendsPageSongs';
import { UserPage } from './user';
import { UserSongs } from './user/UserSongs';

type Section = 'features' | 'your_activities' | 'your_music';

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
        title: translate('wave'),
        icon: <IconWaveSine />,
        component: <DiscoverPage />,
        section: 'features',
        private: false,
    },
    {
        url: 'search',
        title: translate('search'),
        icon: <IconSearch />,
        component: <SearchPage />,
        section: 'features',
        private: false,
        showTitle: false,
    },
    {
        url: 'trends',
        title: translate('trends'),
        icon: <IconTrendingUp />,
        component: <TrendsPageLazy />,
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
                url: 'authors',
                title: translate('trending_authors'),
                icon: <IconMicrophone2 />,
                component: <TrendsPageAuthors />,
                section: 'features',
                private: false,
            },
            {
                url: 'albums',
                title: translate('trending_albums'),
                icon: <IconDisc />,
                component: <TrendsPageAlbums />,
                section: 'features',
                private: false,
            },
            {
                url: 'playlists',
                title: translate('trending_playlists'),
                icon: <IconPlaylist />,
                component: <TrendsPagePlaylists />,
                section: 'features',
                private: false,
            },
        ],
    },
    {
        url: '',
        title: translate('liked'),
        icon: <IconHeart />,
        component: <Library />,
        section: 'your_music',
        private: true,
        showTitle: false,
        children: [
            {
                url: '',
                title: '',
                icon: <IconMusic />,
                component: <LikedSongs />,
                section: 'your_music',
                private: true,
            },
            {
                url: 'playlists',
                title: translate('your_playlists'),
                icon: <IconPlaylist />,
                component: <LikedPlaylists />,
                section: 'your_music',
                private: true,
            },
            {
                url: 'albums',
                title: translate('liked_albums'),
                icon: <IconVinyl />,
                component: <LikedAlbums />,
                section: 'your_music',
                private: true,
            },
            {
                url: 'authors',
                title: translate('liked_authors'),
                icon: <IconMicrophone2 />,
                component: <LikedAuthors />,
                section: 'your_music',
                private: true,
            },
        ],
    },

    {
        url: 'history',
        title: translate('history'),
        icon: <IconHistory />,
        component: <HistoryPageLazy />,
        section: 'your_music',
        private: true,
    },
    {
        url: 'chats',
        title: translate('chats'),
        icon: <IconMessage />,
        component: <ChatsPageLazy />,
        children: [
            {
                url: ':id',
                title: 'Chat',
                icon: <IconMessage />,
                component: <ChatDialog />,
                section: 'your_activities',
                private: true,
            },
        ],
        section: 'your_activities',
        private: true,
    },
    {
        url: 'friends',
        title: translate('friends'),
        icon: <IconUsers />,
        component: <FriendsPageLazy />,
        section: 'your_activities',
        private: true,
    },
    {
        url: 'song/:id',
        title: 'Song',
        icon: <IconMusic />,
        component: <SongPage />,
        section: 'your_music',
        private: true,
    },
    {
        url: 'playlist/:id',
        title: translate('playlist'),
        icon: <IconDisc />,
        component: <PlaylistPageLazy />,
        section: 'your_music',
        private: true,
    },
    {
        url: 'album/:id',
        title: 'Album',
        icon: <IconVinyl />,
        component: <AlbumPage />,
        section: 'your_music',
        private: true,
    },
    {
        url: 'author/:id',
        title: 'Author',
        icon: <IconMicrophone />,
        component: <AuthorPage />,
        section: 'your_music',
        private: true,
    },
    {
        url: 'author/:id/songs',
        title: 'Author songs',
        icon: <IconMusic />,
        component: <AuthorSongs />,
        section: 'your_music',
        private: true,
    },
    {
        url: 'author/:id/similar-authors',
        title: 'Similar Authors',
        icon: <IconMicrophone />,
        component: <SimilarAuthorsPage />,
        section: 'your_music',
        private: true,
    },
    {
        url: 'user/:id',
        title: 'User',
        icon: <IconUser />,
        component: <UserPage />,
        section: 'your_music',
        private: true,
    },
    {
        url: 'user/:id/songs',
        title: 'User Songs',
        icon: <IconMusic />,
        component: <UserSongs />,
        section: 'your_music',
        private: true,
    },
    {
        url: 'user/:id',
        title: 'User',
        icon: <IconUser />,
        component: <UserPage />,
        section: 'your_music',
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
    translate('wave'),
    translate('trends'),
    translate('liked'),
    translate('history'),
    translate('chats'),
    translate('friends'),
]);

export const mobileMenuRoutes = getRoutes([
    translate('wave'),
    translate('trends'),
    translate('liked'),
    translate('chats'),
    translate('search'),
]);
