declare global {
  type Obj<Val = unknown, Key = string> = Record<Key, Val>;
}

export {};
