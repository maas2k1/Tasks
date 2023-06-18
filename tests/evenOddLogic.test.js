import { checkNumber } from './evenOddLogic';

describe('Even/Odd Logic', () => {
  test('should return "even" when the number is even', () => {
    expect(checkNumber(4)).toBe('even');
  });

  test('should return "odd" when the number is odd', () => {
    expect(checkNumber(7)).toBe('odd');
  });
});
