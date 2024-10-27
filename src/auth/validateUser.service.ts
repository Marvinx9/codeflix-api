import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ValidateUserRepository } from './validateUser.repository';

@Injectable()
export class ValidateUserService {
    constructor(private validateUserRepository: ValidateUserRepository) {}

    async execute(email: string) {
        const user = await this.validateUserRepository.findByEmail(email);

        if (!user) {
            throw new UnauthorizedException('Usuário ou senha incorretos!');
        }
        return user;
    }
}
