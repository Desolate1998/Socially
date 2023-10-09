import { IApiResponse } from "../../../models/ApiResponse";
import { ILoginRequestDTO, ILoginResponseDTO } from "../../../models/DTO/LoginDTO";
import { IRegisterRequestDTO, IRegisterResponseDTO } from "../../../models/DTO/RegisterDTO";
import { requests } from "../agent";

export const AccountApi = {
    register: (request: IRegisterRequestDTO) => requests.post<IApiResponse<IRegisterResponseDTO>>('Account/Register', request),
    login: (request: ILoginRequestDTO) => requests.post<IApiResponse<ILoginResponseDTO>>('Account/Login', request),
}