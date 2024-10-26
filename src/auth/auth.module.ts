import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './stategies/local.strategy';
import { AuthService } from './login/auth.service';
import { ValidateUsuarioRepository } from './validate/validateUsuario.repository';
import { ValidateUsuarioService } from './validate/validateUsuario.service';
import { DataBaseService } from 'src/shared/database/postgres/database.service';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1h' },
        }),
    ],
    providers: [
        DataBaseService,
        AuthService,
        LocalStrategy,
        ValidateUsuarioRepository,
        ValidateUsuarioService,
    ],
    exports: [AuthService],
})
export class AuthModule {}
