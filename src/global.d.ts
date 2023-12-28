declare global {
  type Obj<Val = unknown, Key = string> = Record<Key, Val>;
  type NonNullable<T> = T extends null | undefined ? never : T;
}

export {};
