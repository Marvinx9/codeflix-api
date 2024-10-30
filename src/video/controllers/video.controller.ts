import {
    Controller,
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
    constructor(private readonly uploadBannerService: UploadBannerService) {}

    @Post('upload-banner')
    @UseInterceptors(FileInterceptor('file'))
    async uploadBanner(
        @UploadedFile() file: Express.Multer.File,
        @Req() req: Request,
    ) {
        console.log(req.user?.id);

        return await this.uploadBannerService.execute(file, '1');
    }
}
