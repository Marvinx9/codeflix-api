import { Injectable } from '@nestjs/common';
import { DataBaseService } from 'src/shared/database/postgres/database.service';

@Injectable()
export class ValidateUserRepository {
    constructor(private readonly dataBaseService: DataBaseService) {}

    async findByEmail(email: string): Promise<any> {
        const sql = `
            SELECT
                *
            FROM USUARIOS
            WHERE UPPER(EMAIL) = $1
          `;
        const binds = [email.toUpperCase()];

        const result = await this.dataBaseService.query(sql, binds);
        return result[0] ?? undefined;
    }
}
