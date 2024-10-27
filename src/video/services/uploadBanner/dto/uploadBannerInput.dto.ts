import { ApiProperty } from '@nestjs/swagger';

export class UploadBannerInputDto {
    @ApiProperty({ description: 'tamanho máximo da imagem 2MB' })
    max_size = 1024 * 1024 * 2;

    @ApiProperty({ description: 'tipos de imagens aceitáveis' })
    mime_types = ['image/jpeg', 'image/png', 'image/gif'];
}
