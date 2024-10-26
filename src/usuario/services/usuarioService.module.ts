import { Module } from '@nestjs/common';
import { CreateUsuarioRepository } from './createUsuario/repositories/createUsuario.repository';
import { CreateUsuarioService } from './createUsuario/service/createUsuario.service';
import { UsuarioController } from '../controllers/usuario.controller';
import { DataBaseService } from 'src/shared/database/postgres/database.service';
@Module({
    controllers: [UsuarioController],
    providers: [DataBaseService, CreateUsuarioService, CreateUsuarioRepository],
})
export class UsuarioServiceModule {}
