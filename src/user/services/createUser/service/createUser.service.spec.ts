import { Test } from '@nestjs/testing';
import { CreateUserService } from './createUser.service';
import { CreateUserRepository } from '../repositories/createUser.repository';
import { CreateUserInputDto } from '../dto/createUserInput.dto';
import {
    BadRequestException,
    InternalServerErrorException,
} from '@nestjs/common';

// Arrange Values

const mockRequest: CreateUserInputDto = {
    email: 'email@test.com',
    name: 'name test',
    password: 'senha123',
    username: 'username_test',
};

describe('CreateUserService', () => {
    let sut: CreateUserService;
    let createUserRepository: CreateUserRepository;

    beforeEach(async () => {
        const app = await Test.createTestingModule({
            providers: [
                CreateUserService,
                {
                    provide: CreateUserRepository,
                    useValue: {
                        verifyDuplicity: jest.fn(),
                        createUser: jest.fn(),
                    },
                },
            ],
        }).compile();

        sut = app.get<CreateUserService>(CreateUserService);
        createUserRepository =
            app.get<CreateUserRepository>(CreateUserRepository);
    });

    describe('execute', () => {
        it('Should be defined', () => {
            expect(sut).toBeDefined();
            expect(createUserRepository).toBeDefined();
        });

        it('Shoud be able to create a new user', async () => {
            const response = await sut.execute(mockRequest);
            // Act & Assert
            expect(createUserRepository.verifyDuplicity).toHaveBeenCalledWith(
                mockRequest.email,
            );
            expect(response).toBeUndefined();
        });

        it('Shoud throw BadRequestException if user already exists', async () => {
            // Arrange
            jest.spyOn(
                createUserRepository,
                'verifyDuplicity',
            ).mockResolvedValueOnce(1);

            // Act & Assert
            await expect(sut.execute(mockRequest)).rejects.toStrictEqual(
                new BadRequestException('Usuário já criado com esse e-mail'),
            );
        });

        it('Shoud throw InternalServerErrorException if CreateUsuarioService throws', async () => {
            // Arrange

            jest.spyOn(
                createUserRepository,
                'createUser',
            ).mockRejectedValueOnce(new Error());
            // Act & Assert
            await expect(sut.execute(mockRequest)).rejects.toStrictEqual(
                new InternalServerErrorException(
                    'Ocorreu um erro ao criar o usuário. Tente novamente!',
                ),
            );
        });
    });
});
