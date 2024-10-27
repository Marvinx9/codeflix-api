export interface UserPayload {
    sub: string;
    email: string;
    name: string;
    perfil: string;
    iat?: number;
    exp?: number;
}
