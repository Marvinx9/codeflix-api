import { PrismaService } from 'src/infra/database/prisma.service';
import { createUserDataDto } from '../../dto/createUserData.dto';
import { CreateUserInputDto } from '../createUsuario/dto/createUsuarioInput.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUsuarioRepository {
    constructor(private prismaService: PrismaService) {}

    async findById(id: string): Promise<createUserDataDto | null> {
        return await this.prismaService.user.findUnique({
            where: {
                id,
            },
        });
    }

    async findByUsername(username: string): Promise<createUserDataDto | null> {
        return await this.prismaService.user.findUnique({
            where: {
                username,
            },
        });
    }

    async findByUsernameOrEmail(
        username: string,
        email: string,
    ): Promise<createUserDataDto | null> {
        return await this.prismaService.user.findFirst({
            where: {
                OR: [{ username }, { email }],
            },
        });
    }

    async save(data: CreateUserInputDto): Promise<createUserDataDto> {
        return await this.prismaService.user.create({
            data,
        });
    }

    async uploadAvatar(id: string, path: string): Promise<void> {
        await this.prismaService.user.update({
            data: {
                avatarUrl: path,
            },
            where: {
                id,
            },
        });
    }
}
