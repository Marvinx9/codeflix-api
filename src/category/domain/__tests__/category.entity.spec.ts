import { Category } from '../category.entity';

describe('Category Unit Tests', () => {
  it('Should create a new category', () => {
    // Arrange & Act
    const category = new Category({
      name: 'Movie',
    });

    // Assert
    expect(category.category_id).toBeUndefined();
    expect(category.name).toBe('Movie');
    expect(category.description).toBeNull();
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBeInstanceOf(Date);
  });

  it('Should create a new category is_activate', () => {
    // Arrange & Act
    const category = new Category({
      name: 'Movie',
      is_active: false,
    });

    // Assert
    expect(category.category_id).toBeUndefined();
    expect(category.name).toBe('Movie');
    expect(category.description).toBeNull();
    expect(category.is_active).toBeFalsy();
    expect(category.created_at).toBeInstanceOf(Date);
  });

  it('Should change name', () => {
    // Arrange & Act
    const category = new Category({
      name: 'Movie',
      is_active: false,
    });
    category.changeName('other name');

    // Assert
    expect(category.category_id).toBeUndefined();
    expect(category.name).toBe('other name');
    expect(category.description).toBeNull();
    expect(category.is_active).toBeFalsy();
    expect(category.created_at).toBeInstanceOf(Date);
  });
});
