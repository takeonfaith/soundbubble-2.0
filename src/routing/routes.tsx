import {
  IconBrandSafari,
  IconHistory,
  IconMessage,
  IconMusic,
  IconSearch,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";
import { Library } from "./library";
import { Search } from "./search";

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
    component: <>Trends</>,
    section: "features",
  },
  {
    url: "library",
    title: "Library",
    icon: <IconMusic />,
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
    url: "author/:id",
    title: "Author",
    component: <>Author</>,
  },
];

export const allRoutes = [...menuRoutes, ...appRoutes];
