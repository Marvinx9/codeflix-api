import { ApiProperty } from '@nestjs/swagger';

export class UploadBannerInputDto {
    @ApiProperty({ description: 'imagem do banner no formato Buffer' })
    image: Buffer;

    @ApiProperty({ description: 'nome do arquivo de imagem' })
    filename: string;
}
