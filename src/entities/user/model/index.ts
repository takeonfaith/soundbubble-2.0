import { createEffect, createEvent, createStore, sample } from "effector";
import { useUnit } from "effector-react";
import { Database } from "../../../database";
import { ERRORS } from "../../../shared/constants";
import { tryWrapper } from "../../../shared/funcs/trywrapper";
import { TSong } from "../../song/model/types";
import { DEFAULT_PAGE_STORE, DEFAULT_STORE } from "./constants";
import { CreateUserCreditsType, LoginCreditsType, TPageStore, TStore, TUser } from "./types";
import { loadingEffect } from "../../../shared/effector/loadingEffect";
import { errorEffect } from "../../../shared/effector/errorEffect";

const loginFx = createEffect(async (credits: LoginCreditsType): Promise<TUser | null> => {
  return tryWrapper(async () => {
    const { email, password } = credits
    if (!email || !password) throw new Error(ERRORS.loginFailed("Не указана почта или пароль"))

    await Database.Users.login(credits);
  }, "operationFailed");
});

const loadLibraryFx = createEffect(async (store: TStore) => {
  return tryWrapper<TSong[]>(async () => {
    const addedSongs = store.data?.addedSongs ?? []
    const result = await Database.Songs.getSongsByUids(addedSongs)

    return result
  }, 'operationFailed')
})

const loadUserPageFx = createEffect(async (userId: string) => {
  try {
    const user = await Database.Users.getUserByUid(userId)
    const songs = await Database.Songs.getSongsByUids(user?.ownSongs ?? [], true)
    const playlists = await Database.Playlists.getPlaylistsByUids(user?.ownPlaylists ?? [])
    return { user, songs, playlists }
  } catch (error) {
    throw new Error("Failed to get user's page info");
  }
})

const login = createEvent<LoginCreditsType>();
const createUser = createEvent<CreateUserCreditsType>()
const setUser = createEvent<TUser>()
const getLibrary = createEvent()
const setLoggining = createEvent<boolean>()
const getUserPage = createEvent<string>()

const user = createStore<TStore>(DEFAULT_STORE);
const $userPage = createStore<TPageStore>(DEFAULT_PAGE_STORE)

sample({
  clock: login,
  target: loginFx,
});

sample({
  clock: login,
  source: user,
  fn: (store) => ({ ...store, loggining: true }),
  target: user,
});

sample({
  clock: loginFx.doneData,
  source: user,
  fn: (store) => ({ ...store, loggining: false }),
  target: user,
})

sample({
  clock: loginFx.failData,
  source: user,
  fn: (store, error) => ({ ...store, error, loggining: false }),
  target: user,
})

sample({
  clock: setUser,
  source: user,
  fn: (store, data) => ({ ...store, data, loggining: false }),
  target: user
})

sample({
  clock: getLibrary,
  source: user,
  filter: ({ library }) => library.length === 0,
  fn: (store) => ({ ...store, loadingLibrary: true, }),
  target: [user, loadLibraryFx],
})

sample({
  clock: loadLibraryFx.doneData,
  source: user,
  fn: (store, songs) => ({ ...store, library: songs, loadLibraryFx: false }),
  target: user,
})

sample({
  clock: setLoggining,
  source: user,
  fn: (store, logginining) => ({ ...store, logginining }),
  target: user
})

sample({
  clock: getUserPage,
  target: loadUserPageFx,
})

loadingEffect(loadUserPageFx, $userPage)
errorEffect(loadUserPageFx, $userPage)

sample({
  clock: loadUserPageFx.doneData,
  source: $userPage,
  fn: (store, data) => ({ ...store, ...data }),
  target: $userPage,
})

export const userModel = {
  useUser: () => useUnit(user),
  useUserPage: () => useUnit($userPage),
  events: {
    login,
    createUser,
    setUser,
    getLibrary,
    setLoggining,
    loadUserPageFx,
  }
}