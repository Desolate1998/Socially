export interface IApiResponse<T>{
    isSuccessful: boolean
    result?: T
    errorMessage: string
}