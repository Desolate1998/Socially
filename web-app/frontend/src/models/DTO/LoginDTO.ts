export interface ILoginRequestDTO {
    email:string;
    password:string;
}

export interface ILoginResponseDTO{
    isSuccessful:boolean;
    message:string;
    timeRemaining:number;
}