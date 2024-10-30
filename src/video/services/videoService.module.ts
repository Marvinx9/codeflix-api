import { Module } from '@nestjs/common';
import { VideoController } from '../controllers/video.controller';
import { DataBaseService } from 'src/shared/database/postgres/database.service';
import { UploadBannerService } from './uploadBanner/service/uploadBanner.service';
import { UploadBannerRepository } from './uploadBanner/repository/uploadBanner.repository';

@Module({
    controllers: [VideoController],
    providers: [DataBaseService, UploadBannerService, UploadBannerRepository],
})
export class VideoServicesModule {}
