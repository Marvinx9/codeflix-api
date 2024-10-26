import { Module } from '@nestjs/common';
import { CategoryController } from '../controllers/category.controller';
import { CreateCategoryService } from './createCategory/service/createCategory.service';
import { CreateCategoryRepository } from './createCategory/repository/createCategory.repository';

@Module({
    controllers: [CategoryController],
    imports: [],
    providers: [CreateCategoryService, CreateCategoryRepository],
})
export class CategoryServiceModule {}
