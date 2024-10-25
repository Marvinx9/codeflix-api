import { compare } from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ValidateUsuarioRepository } from './validateUsuario.repository';

@Injectable()
export class ValidateUsuarioService {
    constructor(private validateUsuarioRepository: ValidateUsuarioRepository) {}

    async execute(email: string, password: string) {
        const user = await this.validateUsuarioRepository.findByEmail(email);

        if (!user) {
            throw new UnauthorizedException('Usuário ou senha incorretos!');
        }

        if (user) {
            const isPasswordValid = await compare(password, user.password);

            if (isPasswordValid) {
                return {
                    ...user,
                    password: undefined,
                };
            }
        }

        throw new UnauthorizedException('Usuário ou senha incorretos!');
    }
}
