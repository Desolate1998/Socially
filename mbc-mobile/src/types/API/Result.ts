import { ErrorMessage } from "./ErrorMessage";

export interface Result {
    isSuccessful: boolean;
    errorMessage: ErrorMessage[];
  }
  