import { TPlaylist } from "@playlist/model/types";
import { TSong } from "@song/model/types";
import { TUser } from "@user/model/types";

export type THint = TSong | TPlaylist | TUser;
