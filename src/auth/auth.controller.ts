import { Controller, Post, Request } from '@nestjs/common';
import { AuthService } from './login/auth.service';
import {
    ApiOkResponse,
    ApiResponse,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LoginOutputDto } from './dtos/loginOutputDto';
import { AuthRequest } from './dtos/AuthRequest';

@Controller('auth')
@ApiTags('Login')
@ApiResponse({ type: LoginOutputDto })
@ApiOkResponse()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    @ApiUnauthorizedResponse({ description: 'Usuário ou senha incorretos!' })
    async login(@Request() req: AuthRequest) {
        return this.authService.login(req.user);
    }
}
