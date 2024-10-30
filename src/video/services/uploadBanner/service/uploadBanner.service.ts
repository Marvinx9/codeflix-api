import { Injectable } from '@nestjs/common';
import { UploadBannerRepository } from '../repository/uploadBanner.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadBannerService {
    constructor(
        private readonly uploadBannerRepository: UploadBannerRepository,
    ) {}

    async execute(
        file: Express.Multer.File,
        created_by: string,
    ): Promise<void> {
        const { buffer, originalname, mimetype } = file;
        // const id = uuidv4();

        // return await this.uploadBannerRepository.save(
        //     id,
        //     buffer,
        //     originalname,
        //     mimetype,
        //     created_by,
        // );
    }
}
