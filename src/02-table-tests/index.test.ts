// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator', () => {
  const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 5, b: 1, action: Action.Add, expected: 6 },
    { a: 5, b: 1, action: Action.Subtract, expected: 4 },
    { a: 5, b: 1, action: Action.Multiply, expected: 5 },
    { a: 5, b: 1, action: Action.Divide, expected: 5 },
    { a: 5, b: 1, action: Action.Exponentiate, expected: 5 },
    { a: 5, b: 1, action: 'test', expected: null },
    { a: 'test', b: 1, action: Action.Exponentiate, expected: null },
  ];

  testCases.forEach(({ a, b, action, expected }) => {
    test(`should return ${expected} when action is ${action}`, () => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    });
  });
});
