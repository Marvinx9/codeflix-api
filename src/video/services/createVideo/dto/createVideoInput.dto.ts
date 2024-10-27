import { ApiProperty } from '@nestjs/swagger';

export class CreateVideoInputDto {
    id?: string;

    @ApiProperty({})
    title: string;

    @ApiProperty({ description: 'descrição do vídeo' })
    description: string;

    @ApiProperty({ description: 'ano de lançamento' })
    year_launched: number;

    @ApiProperty({ description: 'tempo de duração' })
    duration: number;

    @ApiProperty({ description: 'se é lançamento' })
    is_opened: boolean;

    @ApiProperty({ description: 'se já foi publicado' })
    is_published: boolean;

    @ApiProperty({ description: 'classificação indicada' })
    rating: Rating;

    @ApiProperty({ description: 'id da categoria' })
    category_id: string[];

    @ApiProperty({ description: 'id do gênero' })
    genre_id: string[];

    @ApiProperty({ description: 'id do membro do elenco' })
    cast_member_id: string[];

    @ApiProperty({ description: 'data de criação' })
    created_at: Date;
}

export enum Rating {
    RL = 'L',
    R10 = '10',
    R12 = '12',
    R14 = '14',
    R16 = '16',
    R18 = '18',
}
