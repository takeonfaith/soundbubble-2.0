export type TUser = {
  uid: string;
  displayName: string;
  ownSongs?: string[];
  ownPlaylists?: string[];
};

export type LoginCreditsType = {
  email: string;
  password: string;
};

export type TStore = {
  data: TUser | null;
  error: Error | null;
  loggining?: boolean;
};
