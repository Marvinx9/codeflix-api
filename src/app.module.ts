import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
    imports: [DatabaseModule, CategoryModule],
    controllers: [],
    providers: [CategoryModule],
})
export class AppModule {}
