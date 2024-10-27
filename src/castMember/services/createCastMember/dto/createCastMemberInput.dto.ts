import { ApiProperty } from '@nestjs/swagger';
import { IsIn } from 'class-validator';

export class CreateCastMemberInputDto {
    id?: string;

    @ApiProperty({ description: 'nome membro do elenco' })
    name: string;

    @IsIn(['DIRECTOR', 'ACTOR'])
    type: string;

    @ApiProperty({ description: 'data de criação' })
    created_at: Date;
}
