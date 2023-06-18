import { addNumberToHistory } from './historyscreen';

describe('History Screen', () => {
  let history = [];

  beforeEach(() => {
    history = [];
  });

  test('should add a number to the history', () => {
    addNumberToHistory(history, 5);
    expect(history.length).toBe(1);
    expect(history[0]).toBe(5);
  });

});
