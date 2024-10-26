import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
} from '@nestjs/common';
import { CreateUsuarioRepository } from '../repositories/createUsuario.repository';
import { CreateUsuarioInputDto } from '../dto/createUsuarioInput.dto';
import { v4 as uuidv4 } from 'uuid';

import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUsuarioService {
    constructor(
        private readonly createUsuarioRepository: CreateUsuarioRepository,
    ) {}

    async execute(data: CreateUsuarioInputDto) {
        try {
            const usuario = await this.createUsuarioRepository.verifyDuplicity(
                data.email,
            );

            if (usuario) {
                throw new BadRequestException(
                    'Usuário já criado com esse e-mail',
                );
            }

            data.password = await bcrypt.hash(data.password, 10);

            const id = uuidv4();

            await this.createUsuarioRepository.createUsuario(id, data);
        } catch (error) {
            if (error instanceof BadRequestException) {
                throw error;
            }
            throw new InternalServerErrorException(
                'Ocorreu um erro ao criar o usuário. Tente novamente!',
            );
        }
    }
}
