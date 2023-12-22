export const get2DigitNumber = (value: number): string => {
  return value <= 9 ? `0${value}` : `${value}`;
};
