import axios, { AxiosResponse } from "axios";
import { API_BASE_URL } from "../../appsetings";
axios.defaults.baseURL = API_BASE_URL;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;



export const requests = {
    get: <T>(url: string, query?: string) => axios.get<T>(url, {
        params: query
    }).then(responseBody),
    post: <T>(url: string, body: any) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: any) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
    patch: <T>(url: string, body: any) => axios.patch<T>(url, body).then(responseBody),
    Download: (urlFile: string) => {
        axios.get<Blob>(urlFile).then(responseBody)
    },
}