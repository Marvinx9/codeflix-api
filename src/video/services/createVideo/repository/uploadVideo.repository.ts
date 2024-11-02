import { Injectable } from '@nestjs/common';
import { DataBaseService } from 'src/shared/database/postgres/database.service';

@Injectable()
export class UploadVideoRepository {
    constructor(private readonly dataBaseService: DataBaseService) {}

    async savePath(
        id: string,
        id_banner: string,
        url_video: string,
        created_by: string,
    ): Promise<void> {
        const sql = `
            INSERT INTO VIDEO (
                ID,
                ID_VIDEO_BANNER,
                URL_VIDEO,
                CREATED_BY
            ) VALUES (
                $1,
                $2,
                $3,
                $4
            )
          `;
        const binds = [id, id_banner, url_video, created_by];

        await this.dataBaseService.query(sql, binds);
    }

    async findBanner(id_banner: string): Promise<string> {
        const sql = `
            SELECT
                ID
            FROM video_banner
            WHERE id = $1
          `;
        const binds = [id_banner];

        const result = await this.dataBaseService.query<{ id: string }>(
            sql,
            binds,
        );

        return result[0]?.id ?? null;
    }
}
