import { Injectable } from '@nestjs/common';
import { DataBaseService } from 'src/shared/database/postgres/database.service';

@Injectable()
export class UploadBannerRepository {
    constructor(private readonly dataBaseService: DataBaseService) {}
    async save(
        id: string,
        image: Buffer,
        filename: string,
        mimetype: string,
        created_by: string,
    ) {
        const sql = `
        INSERT INTO VIDEO_BANNER (
            ID,
            IMAGE,
            ORIGINAL_NAME,
            MIME_TYPE,
            CREATED_BY
        )
            VALUES
        (
            $1,
            $2,
            $3,
            $4,
            $5
        )
            `;

        const binds = [id, image, filename, mimetype, created_by];

        await this.dataBaseService.query(sql, binds);
    }
}
