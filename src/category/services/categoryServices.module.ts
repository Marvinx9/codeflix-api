import { Module } from '@nestjs/common';
import { CategoryController } from '../controllers/category.controller';
import { CreateCategoryService } from './createCategory/service/createCategory.service';
import { CreateCategoryRepository } from './createCategory/repository/createCategory.repository';
import { DatabaseModule } from 'src/shared/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [CategoryController],
    providers: [CreateCategoryService, CreateCategoryRepository],
})
export class CategoryServiceModule {}
