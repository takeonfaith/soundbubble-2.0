import {
  IconBrandSafari,
  IconDisc,
  IconHeart,
  IconHistory,
  IconMessage,
  IconMicrophone,
  IconMusic,
  IconSearch,
  IconTrendingUp,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";
import { AuthorPage } from "./author";
import { ChatPage } from "./chat";
import { ChatDialog } from "./chat/ChatDialog/ChatDialog";
import { DiscoverPage } from "./discover";
import { FriendsPage } from "./friends";
import { HistoryPage } from "./history";
import { Library } from "./library";
import { MePage } from "./me";
import { PlaylistPage } from "./playlist";
import { SearchPage } from "./search";
import { SongPage } from "./song";
import { TrendsPage } from "./trends";

type Section = "features" | "your activities" | "your music";

type TRoute = {
  url: string;
  title: string;
  component: React.ReactNode;
  children?: TRoute[]
  section?: Section;
  icon?: React.ReactNode;
  private?: boolean;
};

export const menuRoutes: TRoute[] = [
  {
    url: "discover",
    title: "Discover",
    icon: <IconBrandSafari />,
    component: <DiscoverPage />,
    section: "features",
  },

  {
    url: "trends",
    title: "Trends",
    icon: <IconTrendingUp />,
    component: <TrendsPage />,
    section: "features",
  },
  {
    url: "liked",
    title: "Liked",
    icon: <IconHeart />,
    component: <Library />,
    section: "your music",
    private: true,
  },

  {
    url: "history",
    title: "History",
    icon: <IconHistory />,
    component: <HistoryPage />,
    section: "your music",
    private: true,
  },
  {
    url: "chat",
    title: "Chat",
    icon: <IconMessage />,
    component: <ChatPage />,
    children: [
      {
        url: ":id",
        title: "Chat",
        icon: <IconMessage />,
        component: <ChatDialog />,
        section: "your activities",
        private: true,
      }
    ],
    section: "your activities",
    private: true,
  },
  {
    url: "friends",
    title: "Friends",
    icon: <IconUsers />,
    component: <FriendsPage />,
    section: "your activities",
    private: true,
  },
];

export const appRoutes: TRoute[] = [
  {
    url: "song/:id",
    title: "Song",
    icon: <IconMusic />,
    component: <SongPage />,
    section: "your music",
    private: true,
  },
  {
    url: "search",
    title: "Search",
    icon: <IconSearch />,
    component: <SearchPage />,
    section: "features",
  },
  {
    url: "playlist/:id",
    title: "Playlist",
    icon: <IconDisc />,
    component: <PlaylistPage />,
    section: "your music",
    private: true,
  },
  {
    url: "author/:id",
    title: "Author",
    icon: <IconMicrophone />,
    component: <AuthorPage />,
    section: "your music",
    private: true,
  },
  {
    url: "me",
    title: "Me",
    icon: <IconUser />,
    component: <MePage />,
    section: "your music",
    private: true,
  },
];

export const allRoutes = [...menuRoutes, ...appRoutes];
