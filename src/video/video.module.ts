import { Module } from '@nestjs/common';
import { VideoServicesModule } from './services/videoService.module';

@Module({
    imports: [VideoServicesModule],
    exports: [VideoServicesModule],
})
export class VideoModule {}
