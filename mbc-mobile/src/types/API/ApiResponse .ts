import { Result } from "./Result";

export default interface ApiResponse<TData> {
    isSuccessful: boolean;
    result: TData;
    errorMessage: string;
  }