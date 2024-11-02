import {
    Controller,
    Post,
    Query,
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
import { UploadVideoService } from '../services/createVideo/service/uploadVideo.service';
import * as multer from 'multer';
import { UploadVideoInputDto } from '../services/createVideo/dto/uploadVideoInput.dto';

@Controller('video')
@UseGuards(JwtAuthGuard)
@ApiTags('video')
export class VideoController {
    constructor(
        private readonly uploadBannerService: UploadBannerService,
        private readonly uploadVideoService: UploadVideoService,
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
    @UseInterceptors(
        FileInterceptor('file', {
            storage: multer.memoryStorage(),
            limits: { fileSize: 100 * 1024 * 1024 },
        }),
    )
    async uploadVideo(
        @Query() data: UploadVideoInputDto,
        @Req() req: Request,
        @UploadedFile() file: Express.Multer.File,
    ): Promise<void> {
        data.created_by = req.user.id;
        return await this.uploadVideoService.execute(file, data);
    }
}
