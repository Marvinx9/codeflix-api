export interface UserPayload {
    sub: string;
    id: string;
    email: string;
    name: string;
    perfil: string;
    iat?: number;
    exp?: number;
}
