import { Injectable } from '@nestjs/common';
import { DataBaseService } from 'src/shared/database/postgres/database.service';

@Injectable()
export class ValidateUsuarioRepository {
    constructor(private readonly dataBaseService: DataBaseService) {}

    async findByEmail(email: string): Promise<any> {
        const sql = `
            SELECT
                *
            FROM USUARIO
            WHERE EMAIL LIKE '$1'
          `;
        const binds = [email];

        return await this.dataBaseService.query(sql, binds);
    }
}
