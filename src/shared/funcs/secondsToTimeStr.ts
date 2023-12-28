import { get2DigitNumber } from "./get2DigitNumber";

export const secondsToTimeStr = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${get2DigitNumber(minutes)}:${get2DigitNumber(secs)}`;
};
