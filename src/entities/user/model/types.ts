export type User = unknown;

export type LoginCreditsType = {
  email: string;
  password: string;
};

export type TStore = {
  data: User | null;
  error: Error | null;
  loggining?: boolean;
};
