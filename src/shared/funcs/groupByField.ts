export const groupByField = <T extends Obj>(
  arr: T[],
  fieldName: keyof T
): Obj<T[], T[keyof T]> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = {};

  arr.forEach((obj) => {
    const fieldValue = obj[fieldName];

    if (result[fieldValue] === undefined) {
      result[fieldValue] = [obj];
    } else {
      result[fieldValue].push(obj);
    }
  });

  return result;
};
