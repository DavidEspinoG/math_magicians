import CalculatorButton from "../components/CalculatorButton";
import { render, screen } from "@testing-library/react";

test('Calculator button renders the correct symbol', () => {
  const mockFuction1 = jest.fn();
  const mockFuction2 = jest.fn();
  const initialState = {
    total: '0',
    next: null,
    operation: null,
  };
  render(<CalculatorButton 
    content="p"
    color='gray'  
    onClick={mockFuction1}
    state={initialState}
    setState={mockFuction2}
    />);
  const letter = screen.getByText('p')
  expect(letter).toBeInTheDocument()
})
test('Calculator match the snapshot', () => {
  const mockFuction1 = jest.fn();
  const mockFuction2 = jest.fn();
  const initialState = {
    total: '0',
    next: null,
    operation: null,
  };
  const component = render(<CalculatorButton 
    content="p"
    color='gray'  
    onClick={mockFuction1}
    state={initialState}
    setState={mockFuction2}
    />);
  expect(component).toMatchSnapshot()
})

