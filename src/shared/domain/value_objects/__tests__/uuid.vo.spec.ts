import { InvalidUuidError, Uuid } from '../uuid.vo';

describe('Uuid Unit Tests', () => {
    it('Should throw error when uuid is invalid', () => {
        // Assert
        expect(() => {
            new Uuid('Invalid-uuid');
        }).toThrow(new InvalidUuidError('Id must be a valid uuid'));
    });
});
