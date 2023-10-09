import { IFieldErrorMessage } from "../FieldErrorMessage";

export interface IRegisterRequestDTO {
    email:string;
    password:string;
    username:string;
    confirmPassword:string;
}

export interface IRegisterResponseDTO{
    isSuccessful:boolean;
    errorMessage:IFieldErrorMessage[]
}
