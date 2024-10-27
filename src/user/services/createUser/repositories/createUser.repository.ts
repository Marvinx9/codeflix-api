import { Injectable } from '@nestjs/common';
import { DataBaseService } from 'src/shared/database/postgres/database.service';
import { CreateUserInputDto } from '../dto/createUserInput.dto';

@Injectable()
export class CreateUserRepository {
    constructor(private dataBaseService: DataBaseService) {}

    async verifyDuplicity(email: string): Promise<number> {
        const sql = `
        SELECT
            id
        FROM usuarios u
        WHERE UPPER(email) = $1
        `;

        const binds = [email.toUpperCase()];

        const result = await this.dataBaseService.query<{ id: number }>(
            sql,
            binds,
        );

        return result[0]?.id ?? undefined;
    }

    async createUser(id: string, data: CreateUserInputDto): Promise<void> {
        const sql = `
        INSERT INTO usuarios
        (
            ID,
            USERNAME,
            EMAIL,
            PASSWORD,
            NAME
        ) VALUES (
            $1,
            $2,
            $3,
            $4,
            $5
        )
            `;

        const binds = [
            id,
            data.username.toUpperCase(),
            data.email.toUpperCase(),
            data.password,
            data.name.toUpperCase(),
        ];

        await this.dataBaseService.query(sql, binds);
    }
}
