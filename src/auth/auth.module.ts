import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ValidateUserRepository } from './repository/validateUser.repository';
import { DataBaseService } from 'src/shared/database/postgres/database.service';
import * as dotenv from 'dotenv';
import { AuthService } from './service/auth.service';
import { ValidateUserService } from './service/validateUser.service';

dotenv.config();
@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
        ValidateUserService,
        ValidateUserRepository,
        DataBaseService,
    ],
    exports: [AuthService],
})
export class AuthModule {}
