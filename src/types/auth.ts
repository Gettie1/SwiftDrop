export enum Role  {
    ADMIN = 'admin',
    CUSTOMER = 'customer',
    COURIER = 'courier',
}
export interface loginData {
    email: string;
    password: string;
}
export interface LoginResponse {
    user:{
        id: string;
        username: string;
        email: string;
        role: Role | string;
    };
    isAuthenticated: boolean;
    access_token?: string;
    refresh_token?: string;
}
export interface RegisterData {
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    username: string;
    email: string;
    password: string;
    role: Role | string;
}
