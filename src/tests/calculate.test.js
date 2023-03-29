import calculate from '../logic/calculate';

test('Calculate returns an object', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  expect(calculate(obj, 'AC')).toBeInstanceOf(Object);
});

test('Obj.total is equals to 2 when 1 + 1', () => {
  const obj = {
    total: 1,
    next: 1,
    operation: '+',
  };
  expect(calculate(obj, '=').total).toBe('2');
});

test('AC button cleans the total returning null', () => {
  const obj = {
    total: 1,
    next: 1,
    operation: '+',
  };
  expect(calculate(obj, 'AC').total).toBeNull();
});
