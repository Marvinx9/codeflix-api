import { Module } from '@nestjs/common';
import { CreateUserRepository } from './createUser/repositories/createUser.repository';
import { CreateUserService } from './createUser/service/createUser.service';
import { UserController } from '../controllers/user.controller';
import { DataBaseService } from 'src/shared/database/postgres/database.service';
@Module({
    controllers: [UserController],
    providers: [DataBaseService, CreateUserService, CreateUserRepository],
})
export class UserServiceModule {}
