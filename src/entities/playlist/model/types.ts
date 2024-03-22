import { TAuthor } from "@song/model/types";

export type TPlaylist = {
  name: string;
  songs: string[];
  subscribers: number;
  listens: number;
  isPrivate: boolean;
  isAlbum: boolean;
  imageColors: string[];
  image: string;
  id: string;
  creationDate: string;
  authors: TAuthor[];
};
