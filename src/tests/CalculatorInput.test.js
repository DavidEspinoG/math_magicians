import { render, screen } from '@testing-library/react';
import CalculatorInput from '../components/CalculatorInput';

test('The default value is 0', () => {
  const initialState = {
    total: '0',
    next: null,
    operation: null,
  };
  render(<CalculatorInput state={initialState} />);
  const number = screen.getByText('0');
  expect(number).toBeInTheDocument();
});
test('Calcularor input matches the snapshot', () => {
  const initialState = {
    total: '0',
    next: null,
    operation: null,
  };
  const element = render(<CalculatorInput state={initialState} />);
  expect(element).toMatchSnapshot();
});
