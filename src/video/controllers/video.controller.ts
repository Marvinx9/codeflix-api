import {
    Controller,
    Get,
    Param,
    Post,
    Req,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadBannerService } from '../services/uploadBanner/service/uploadBanner.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Request } from 'express';

@Controller('video')
@UseGuards(JwtAuthGuard)
@ApiTags('video')
export class VideoController {
    constructor(
        private readonly uploadBannerService: UploadBannerService,
        private readonly uploadVideoService: UploadVideoService,
        private readonly findVideoService: FindVideoService,
    ) {}

    @Post('upload-banner')
    @UseInterceptors(FileInterceptor('file'))
    async uploadBanner(
        @UploadedFile() file: Express.Multer.File,
        @Req() req: Request,
    ) {
        return await this.uploadBannerService.execute(file, req.user?.id);
    }

    @Post('upload-video')
    @UseInterceptors(FileInterceptor('file'))
    async uploadVideo(@UploadedFile() file: Express.Multer.File) {
        const video = await this.uploadVideoService.execute(file);
        return { message: 'Video enviado com sucesso', video };
    }

    @Get('video/:id')
    async findVideo(@Param('id') id: string) {
        return await this.findVideoService.execute(id);
    }
}
