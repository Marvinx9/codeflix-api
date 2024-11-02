import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UploadVideoInputDto {
    @ApiProperty({ description: 'id do banner referente ao video' })
    @IsString()
    @IsNotEmpty()
    id_banner: string;

    @ApiProperty({ description: 'id do criador' })
    @IsString()
    @IsNotEmpty()
    created_by?: string;
}
