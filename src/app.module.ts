import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/usuario.module';
import { VideoModule } from './video/video.module';
import { SharedModule } from './shared/shared.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        SharedModule,
        UserModule,
        CategoryModule,
        AuthModule,
        VideoModule,
    ],
})
export class AppModule {}
