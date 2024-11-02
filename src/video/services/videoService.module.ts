import { Module } from '@nestjs/common';
import { VideoController } from '../controllers/video.controller';
import { UploadBannerService } from './uploadBanner/service/uploadBanner.service';
import { UploadBannerRepository } from './uploadBanner/repository/uploadBanner.repository';
import { DatabaseModule } from 'src/shared/database/database.module';
import { UploadVideoService } from './createVideo/service/uploadVideo.service';
import { UploadVideoRepository } from './createVideo/repository/uploadVideo.repository';

@Module({
    imports: [DatabaseModule],
    controllers: [VideoController],
    providers: [
        UploadBannerService,
        UploadBannerRepository,
        UploadVideoService,
        UploadVideoRepository,
    ],
})
export class VideoServicesModule {}
