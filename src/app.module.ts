import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { DatabaseModule } from './shared/database/database.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
    imports: [
        DatabaseModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        UsuarioModule,
        CategoryModule,
        AuthModule,
    ],
})
export class AppModule {}
