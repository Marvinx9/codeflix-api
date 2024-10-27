import { ApiProperty } from '@nestjs/swagger';

export class UploadImageInputDto {
    @ApiProperty({ description: 'nome da imagem' })
    name: string;

    @ApiProperty({ description: 'caminho da imagem' })
    location: string;
}
