export interface User {
    firstname: string;
    lastname:string;
    password: string;
    username: string;
    contactNo:string;
    role: string;
    status: boolean;
    accessToken?:string;
}