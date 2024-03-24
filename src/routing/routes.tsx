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
  IconUsers,
} from "@tabler/icons-react";
import { Library } from "./library";
import { Search } from "./search";
import { SongPage } from "./song";
import { PlaylistPage } from "./playlist";
import { AuthorPage } from "./author";
import { TrendsPage } from "./trends";

type Section = "features" | "your activities" | "your music";

type TRoute = {
  url: string;
  title: string;
  component: React.ReactNode;
  section?: Section;
  icon?: React.ReactNode;
  private?: boolean;
};

export const menuRoutes: TRoute[] = [
  {
    url: "discover",
    title: "Discover",
    icon: <IconBrandSafari />,
    component: <>Discover</>,
    section: "features",
  },
  {
    url: "search",
    title: "Search",
    icon: <IconSearch />,
    component: <Search />,
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
    component: <>History</>,
    section: "your music",
    private: true,
  },

  {
    url: "chat",
    title: "Chat",
    icon: <IconMessage />,
    component: <>chat</>,
    section: "your activities",
    private: true,
  },
  {
    url: "friends",
    title: "Friends",
    icon: <IconUsers />,
    component: <>Friends</>,
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
];

export const allRoutes = [...menuRoutes, ...appRoutes];
