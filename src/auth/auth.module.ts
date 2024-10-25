import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { LoginService } from './login/auth.service';
import { LoginController } from './auth.controller';
import { IUserRepository } from '../usuario/services/repositories/user.repository';
import { UserPrismaRepository } from '../usuario/services/repositories/user.prisma.repository';

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '12h' },
        }),
    ],
    controllers: [LoginController],
    providers: [
        LoginService,
        {
            provide: IUserRepository,
            useClass: UserPrismaRepository,
        },
    ],
})
export class AuthModule {}
