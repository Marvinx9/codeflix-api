import { Body, Controller, Post, Request, Response } from '@nestjs/common';
import { LoginService } from './login/auth.service';
import { LoginDto } from './dtos/login.dto';
import {
    ApiOkResponse,
    ApiResponse,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LoginOutputDto } from './dtos/loginOutputDto';
import { Response as ExpressResponse } from 'express';
import { AuthRequest } from './dtos/AuthRequest';

@Controller('auth')
@ApiTags('Login')
@ApiResponse({ type: LoginOutputDto })
@ApiOkResponse()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    @ApiUnauthorizedResponse({ description: 'Usuário ou senha incorretos!' })
    async login(@Request() req: AuthRequest, @Response() res: ExpressResponse) {
        return this.authService.login(req.user, res);
    }
}
