import { Module } from '@nestjs/common';
import { CreateUsuarioRepository } from './createUsuario/repositories/createUsuario.repository';
import { CreateUsuarioService } from './createUsuario/service/createUsuario.service';
import { UsuarioController } from '../controllers/usuario.controller';
@Module({
    controllers: [UsuarioController],
    imports: [CreateUsuarioService, CreateUsuarioRepository],
    providers: [CreateUsuarioService, CreateUsuarioRepository],
})
export class UsuarioServiceModule {}
