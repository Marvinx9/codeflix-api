import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './stategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './stategies/jwt.strategy';
import { ValidateUserService } from './validateUser.service';
import { ValidateUserRepository } from './validateUser.repository';
import { DataBaseService } from 'src/shared/database/postgres/database.service';
import * as dotenv from 'dotenv';

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
