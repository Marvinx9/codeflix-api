import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { DatabaseModule } from './shared/database/database.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/usuario.module';
import { VideoModule } from './video/video.module';

@Module({
    imports: [
        DatabaseModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        UserModule,
        CategoryModule,
        AuthModule,
        VideoModule,
    ],
})
export class AppModule {}
