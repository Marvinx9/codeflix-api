import { Module } from '@nestjs/common';
import { CategoryServiceModule } from './services/categoryServices.module';

@Module({
    imports: [CategoryServiceModule],
    exports: [CategoryServiceModule],
})
export class CategoryModule {}
