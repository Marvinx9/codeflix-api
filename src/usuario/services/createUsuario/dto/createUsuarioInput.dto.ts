import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateUsuarioInputDto {
    @ApiProperty({ description: 'nick do usuário', example: 'Jonh' })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        description: 'email do usuário',
        example: 'jonas@gmail.com',
    })
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: 'senha do usuário', example: 'jonas123' })
    @IsString()
    @IsNotEmpty()
    @Min(4)
    password: string;

    @ApiProperty({
        description: 'nome completo do usuário',
        example: 'Jonas da silva Soares',
    })
    @IsString()
    @IsNotEmpty()
    name: string;
}
