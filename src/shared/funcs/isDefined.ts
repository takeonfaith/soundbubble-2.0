export const isDefined = (el: unknown): el is NonNullable<typeof el> => {
  return el !== null && el !== undefined;
};
