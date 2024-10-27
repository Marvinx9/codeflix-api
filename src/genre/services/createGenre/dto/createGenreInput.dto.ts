import { ApiProperty } from '@nestjs/swagger';

export class CreateGenteInputDto {
    id?: string;

    @ApiProperty({ description: 'gênero do filme' })
    name: string;

    @ApiProperty({ description: 'se o gênero é ativo' })
    is_active: boolean;

    @ApiProperty({ description: 'id da categoria' })
    category_id: [];

    @ApiProperty({ description: 'data de criação' })
    created_at: Date;
}

// um gênero pode existir em mais de uma categoria
