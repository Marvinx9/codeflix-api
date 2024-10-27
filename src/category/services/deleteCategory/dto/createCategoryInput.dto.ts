import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryInputDto {
    id?: string;

    @ApiProperty({ description: 'nome da categoria' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'descricão da categoria' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ description: 'status da categoria', example: true })
    @IsIn([true, false])
    @IsNotEmpty()
    is_active: boolean;
}
