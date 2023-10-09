import { requests } from "../agent";

export const HeathApi={
    echo:()=>requests.get<any>('HealthCheck/Echo'),
}