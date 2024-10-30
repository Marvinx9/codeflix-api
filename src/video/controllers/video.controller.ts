import {
    Controller,
    Post,
    Request,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadBannerService } from '../services/uploadBanner/service/uploadBanner.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('video')
@UseGuards(UseGuards)
@ApiTags('video')
export class VideoController {
    constructor(private readonly uploadBannerService: UploadBannerService) {}

    @Post('upload-banner')
    @UseInterceptors(FileInterceptor('file'))
    async uploadBanner(
        @UploadedFile() file: Express.Multer.File,
        @Request() req,
    ) {
        console.log(req.header);

        return await this.uploadBannerService.execute(file, '1');
    }
}
