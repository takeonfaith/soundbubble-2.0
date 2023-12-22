import { ERRORS } from "../constants";
import { handleError } from "./handleError";

export const tryWrapper = (
  fn: () => unknown,
  errorType: keyof typeof ERRORS
) => {
  try {
    return fn();
  } catch (error) {
    throw new Error(ERRORS[errorType](handleError(error)));
  }
};
