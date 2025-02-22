import { lazy } from 'react';
import { AuthorPage } from './author'
import { ChatPage } from './chat';
import { DiscoverPage } from './discover';
import { FriendsPage } from './friends';
import { HistoryPage } from './history';
import { PlaylistPage } from './playlist';
import { TrendsPage } from './trends/ui';
import { UserPage } from './user/ui';

export const FriendsPageLazy = lazy(async () => ({ default: FriendsPage }));
export const HistoryPageLazy = lazy(async () => ({ default: HistoryPage }));
export const ChatsPageLazy = lazy(async () => ({ default: ChatPage }));
export const TrendsPageLazy = lazy(async () => ({ default: TrendsPage }));
export const WavePageLazy = lazy(async () => ({ default: DiscoverPage }));
export const UserPageLazy = lazy(async () => ({ default: UserPage }));
export const AuthorPageLazy = lazy(async () => ({ default: AuthorPage }));
export const PlaylistPageLazy = lazy(async () => ({ default: PlaylistPage }));
