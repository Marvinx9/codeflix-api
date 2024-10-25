import { Module } from '@nestjs/common';
import { UsuarioServiceModule } from './services/usuarioService.module';
@Module({
    imports: [UsuarioServiceModule],
    providers: [UsuarioServiceModule],
})
export class UsuarioModule {}
