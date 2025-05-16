const { fn } = require('./fn');

describe('fn function', () => {
  // Test cases for valid inputs
  test('should calculate area of a triangle correctly', () => {
    const input = [
      [0, 0],
      [1, 0],
      [0, 1]
    ];
    expect(fn(input)).toBe(0.5);
  });

  test('should calculate area of a square correctly', () => {
    const input = [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 0]
    ];
    expect(fn(input)).toBe(1);
  });

  test('should calculate area of a complex polygon correctly', () => {
    const input = [
      [0, 0],
      [2, 0],
      [2, 2],
      [1, 3],
      [0, 2]
    ];
    expect(fn(input)).toBe(5);
  });

  // Test cases for invalid inputs
  test('should throw error for non-array input', () => {
    expect(() => fn('not an array')).toThrow('Bad input');
  });

  test('should throw error for array with less than 3 points', () => {
    expect(() => fn([[0, 0], [1, 1]])).toThrow('Bad input');
  });

  test('should throw error for points that are not arrays', () => {
    expect(() => fn([
      [0, 0],
      'not an array',
      [1, 1]
    ])).toThrow('Bad format');
  });

  test('should throw error for points that do not have exactly 2 elements', () => {
    expect(() => fn([
      [0, 0],
      [1, 1, 1],
      [2, 2]
    ])).toThrow('Bad format');
  });

  test('should throw error for points with non-numeric coordinates', () => {
    expect(() => fn([
      [0, 0],
      ['1', 1],
      [2, 2]
    ])).toThrow('Bad format');
  });

  // Edge cases
  test('should return 0 for collinear points forming a line', () => {
    const input = [
      [0, 0],
      [1, 1],
      [2, 2]
    ];
    expect(fn(input)).toBe(0);
  });

  test('should handle negative coordinates correctly', () => {
    const input = [
      [-1, -1],
      [1, -1],
      [0, 1]
    ];
    expect(fn(input)).toBe(2);
  });
});