import { createEvent, createStore, sample } from "effector";
import { DEFAULT_STORE } from "./constants";
import { useUnit } from "effector-react";
import { TStore } from "./types";

const open = createEvent<{ title: string; content: React.ReactNode }>();
const close = createEvent();

const $modalStore = createStore<TStore>(DEFAULT_STORE);

sample({
  clock: open,
  source: $modalStore,
  fn: (_, { title, content }): TStore => ({ opened: true, title, content }),
  target: $modalStore,
});

sample({
  clock: close,
  source: $modalStore,
  fn: (old): TStore => ({ ...old, opened: false }),
  target: $modalStore,
});

export const modalModel = {
  useModal: () => {
    return useUnit($modalStore);
  },
  events: {
    open,
    close,
  },
};
