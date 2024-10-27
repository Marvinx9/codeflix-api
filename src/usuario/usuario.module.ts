import { Module } from '@nestjs/common';
import { UsuarioServiceModule } from './services/usuarioService.module';
@Module({
    imports: [UsuarioServiceModule],
    exports: [UsuarioServiceModule],
})
export class UsuarioModule {}
