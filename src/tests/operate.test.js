import operate from '../logic/operate';

describe('operate test', () => {
  test('1 + 1 equals to 2', () => {
    expect(operate(1, 1, '+')).toBe('2');
  });
  test('3 + 1 equals to 2', () => {
    expect(operate(3, 1, '-')).toBe('2');
  });
  test('10 / 5 equals to 2', () => {
    expect(operate(10, 5, '÷')).toBe('2');
  });
});
