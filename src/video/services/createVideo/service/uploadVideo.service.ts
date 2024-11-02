import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
} from '@nestjs/common';
import { UploadVideoRepository } from '../repository/uploadVideo.repository';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { v4 as uuidV4 } from 'uuid';
import { UploadVideoInputDto } from '../dto/uploadVideoInput.dto';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class UploadVideoService {
    private s3Client: S3Client;
    private bucketName = process.env.AWS_BUCKET;

    constructor(private readonly uploadVideoRepository: UploadVideoRepository) {
        this.s3Client = new S3Client({
            region: process.env.AWS_BUCKET_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
        });
    }

    async execute(
        file: Express.Multer.File,
        data: UploadVideoInputDto,
    ): Promise<void> {
        if (!(await this.uploadVideoRepository.findBanner(data.id_banner))) {
            throw new BadRequestException('Id do banner inválido!');
        }

        const fileName = `videos/${uuidV4()}-${file.originalname}`;

        try {
            await this.s3Client.send(
                new PutObjectCommand({
                    Bucket: this.bucketName,
                    Key: fileName,
                    Body: file.buffer,
                    ContentType: file.mimetype,
                }),
            );

            const url_video = `https://${this.bucketName}.s3.amazonaws.com/${fileName}`;

            const id = uuidV4();

            await this.uploadVideoRepository.savePath(
                id,
                data.id_banner,
                url_video,
                data.created_by,
            );
        } catch {
            throw new InternalServerErrorException(
                'Ocorreu um erro ao realizar o upload do vídeo! Tente novamente.',
            );
        }
    }
}
