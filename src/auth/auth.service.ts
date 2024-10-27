/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './dtos/currentUser.interface';
import { UserPayload } from './dtos/userPayload';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { ValidateUserService } from './validateUser.service';
import { compare } from 'bcrypt';
import { LoginOutputDto } from './dtos/loginOutput.dto';

dotenv.config();

@Injectable()
export class AuthService {
    constructor(
        private readonly validateUserService: ValidateUserService,
        private readonly jwtService: JwtService,
    ) {}

    async login(user: User): Promise<LoginOutputDto> {
        const payload: UserPayload = {
            sub: user.id,
            email: user.email,
            name: user.name,
            perfil: user.perfil,
        };

        return {
            access_token: this.jwtService.sign(payload),
            id: user.id,
            email: user.email,
            name: user.name,
            perfil: user.perfil,
        };
    }

    async validateUser(email: string, password: string) {
        const user = await this.validateUserService.execute(email);

        if (user) {
            const isPasswordValid = await compare(password, user.password);

            if (isPasswordValid) {
                const { password, ...result } = user;

                return result;
            }
        }

        throw new UnauthorizedException('Usuário ou senha incorretos!');
    }
}
