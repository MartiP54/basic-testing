import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const testInput = {
      a: 5,
      b: 1,
      action: Action.Add,
    };
    const result = simpleCalculator(testInput);
    expect(result).toBe(6);
  });

  test('should subtract two numbers', () => {
    const testInput = {
      a: 5,
      b: 1,
      action: Action.Subtract,
    };
    const result = simpleCalculator(testInput);
    expect(result).toBe(4);
  });

  test('should multiply two numbers', () => {
    const testInput = {
      a: 5,
      b: 1,
      action: Action.Multiply,
    };
    const result = simpleCalculator(testInput);
    expect(result).toBe(5);
  });

  test('should divide two numbers', () => {
    const testInput = {
      a: 5,
      b: 1,
      action: Action.Divide,
    };
    const result = simpleCalculator(testInput);
    expect(result).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    const testInput = {
      a: 5,
      b: 1,
      action: Action.Exponentiate,
    };
    const result = simpleCalculator(testInput);
    expect(result).toBe(5);
  });

  test('should return null for invalid action', () => {
    const testInput = {
      a: 5,
      b: 1,
      action: 'test',
    };
    const result = simpleCalculator(testInput);
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const testInput = {
      a: 'a',
      b: 1,
      action: Action.Add,
    };
    const result = simpleCalculator(testInput);
    expect(result).toBeNull();
  });
});
