import { createEffect, createEvent, createStore, sample } from "effector";
import { Database } from "../../../database";
import { tryWrapper } from "../../../shared/funcs/trywrapper";
import { DEFAULT_STORE } from "./constants";
import { LoginCreditsType, TStore } from "./types";

const loginFx = createEffect(async (credits: LoginCreditsType) => {
  tryWrapper(async () => {
    await Database.login(credits);
  }, "operationFailed");
});

const login = createEvent<LoginCreditsType>();

export const user = createStore<TStore>(DEFAULT_STORE);

sample({
  clock: login,
  target: loginFx,
});
