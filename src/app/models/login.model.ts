export interface LoginResponse{
    jwt:string
}

export interface LoginRequest{
    username:string,
    password: string
}