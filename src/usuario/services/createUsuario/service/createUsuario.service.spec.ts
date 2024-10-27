import { Test } from '@nestjs/testing';
import { CreateUsuarioService } from './createUsuario.service';
import { CreateUsuarioRepository } from '../repositories/createUsuario.repository';
import { CreateUsuarioInputDto } from '../dto/createUsuarioInput.dto';
import {
    BadRequestException,
    InternalServerErrorException,
} from '@nestjs/common';

// Arrange Values

const mockRequest: CreateUsuarioInputDto = {
    email: 'email@test.com',
    name: 'name test',
    password: 'senha123',
    username: 'username_test',
};

describe('CreateUsuarioService', () => {
    let sut: CreateUsuarioService;
    let createUsuarioRepository: CreateUsuarioRepository;

    beforeEach(async () => {
        const app = await Test.createTestingModule({
            providers: [
                CreateUsuarioService,
                {
                    provide: CreateUsuarioRepository,
                    useValue: {
                        verifyDuplicity: jest.fn(),
                        createUsuario: jest.fn(),
                    },
                },
            ],
        }).compile();

        sut = app.get<CreateUsuarioService>(CreateUsuarioService);
        createUsuarioRepository = app.get<CreateUsuarioRepository>(
            CreateUsuarioRepository,
        );
    });

    describe('execute', () => {
        it('Should be defined', () => {
            expect(sut).toBeDefined();
            expect(createUsuarioRepository).toBeDefined();
        });

        it('Shoud be able to create a new user', async () => {
            const response = await sut.execute(mockRequest);
            // Act & Assert
            expect(
                createUsuarioRepository.verifyDuplicity,
            ).toHaveBeenCalledWith(mockRequest.email);
            expect(response).toBeUndefined();
        });

        it('Shoud throw BadRequestException if user already exists', async () => {
            // Arrange
            jest.spyOn(
                createUsuarioRepository,
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
                createUsuarioRepository,
                'createUsuario',
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
