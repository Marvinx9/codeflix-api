import { Request } from 'express';

export class AuthRequest extends Request {
    user: User;
}

export interface User {
    id?: string;
    email: string;
    password: string;
    name: string;
}
