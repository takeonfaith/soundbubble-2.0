import { ERRORS } from "../constants";
import { handleError } from "./handleError";

export const tryWrapper = <T>(
  fn: () => unknown,
  errorType: keyof typeof ERRORS
) => {
  try {
    return fn() as T;
  } catch (error) {
    throw new Error(ERRORS[errorType](handleError(error)));
  }
};
