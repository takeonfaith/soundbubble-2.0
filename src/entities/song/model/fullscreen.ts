import { createEvent, createStore, sample } from "effector";
import { useUnit } from "effector-react";

const $fullScreen = createStore<boolean>(false);

export const open = createEvent();
export const close = createEvent();

sample({
  clock: open,
  source: $fullScreen,
  fn: () => true,
  target: $fullScreen,
});

sample({
  clock: close,
  source: $fullScreen,
  fn: () => false,
  target: $fullScreen,
});

export const useFullScreen = () => {
  return useUnit($fullScreen);
};
