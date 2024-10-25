import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { LoginOutputDto } from '../dtos/loginOutputDto';
import { User } from '../dtos/authRequest';
import { ValidateUsuarioService } from '../validate/validateUsuario.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly validateUsuarioService: ValidateUsuarioService,
        private readonly jwtService: JwtService,
    ) {}

    async login(user: User): Promise<LoginOutputDto> {
        const payload = {
            sub: user.id,
            email: user.email,
            name: user.name,
        };

        const token = await this.jwtService.signAsync(payload);

        return {
            access_token: token,
            id: user.id,
            email: user.email,
            name: user.name,
        };
    }
}
