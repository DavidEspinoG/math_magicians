import { render, screen } from "@testing-library/react";
import Calculator from "../components/Calculator";

test('Calculator is on the DOM ', () => {
  render(<Calculator />)
  const calculator = screen.getByTestId('calculator')
  expect(calculator).toBeInTheDocument();
})

test('Match snapshot ', () => {
  const element = render(<Calculator />)
  expect(element).toMatchSnapshot();
})