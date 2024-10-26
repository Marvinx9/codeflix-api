import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ValidateUsuarioService } from '../validate/validateUsuario.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private validateUsuarioService: ValidateUsuarioService) {
        super({ usernameField: 'email' });
    }

    validate(email: string, password: string) {
        return this.validateUsuarioService.execute(email, password);
    }
}
