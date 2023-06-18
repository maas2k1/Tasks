import { HandleInput } from './App';

describe('App', () => {
  test('should return "even" when the number is even', () => {
    expect(HandleInput(4)).toBe('even');
  });

  test('should return "odd" when the number is odd', () => {
    expect(HandleInput(7)).toBe('odd');
  });
});
