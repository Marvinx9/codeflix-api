import { Body, Controller, Post } from '@nestjs/common';
import { CreateUsuarioService } from '../services/createUsuario/service/createUsuario.service';
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiInternalServerErrorResponse,
    ApiTags,
} from '@nestjs/swagger';
import { CreateUsuarioInputDto } from '../services/createUsuario/dto/createUsuarioInput.dto';

@Controller('usuario')
@ApiTags('usuario')
export class UsuarioController {
    constructor(private readonly createUsuarioService: CreateUsuarioService) {}

    @Post()
    @ApiCreatedResponse()
    @ApiBadRequestResponse({ description: 'Usuário já criado com esse e-mail' })
    @ApiInternalServerErrorResponse({
        description: 'Ocorreu um erro ao criar o usuário. Tente novamente!',
    })
    async createUsuario(@Body() data: CreateUsuarioInputDto) {
        await this.createUsuarioService.execute(data);
    }
}
