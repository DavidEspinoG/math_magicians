import { screen, render, fireEvent } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';

test('Page title to be Math Magicians', () => {
  render(<Header />, {wrapper: BrowserRouter});
  const title = screen.getByText(/Math Magicians/i);
  expect(title).toBeInTheDocument();
});

test('Home link to be in the header', () => {
  render(<Header />, {wrapper: BrowserRouter});
  const home = screen.getByText(/Home/i);
  expect(home).toBeInTheDocument();
});

test('Calculator link to be in the header', () => {
  render(<Header />, {wrapper: BrowserRouter});
  const caltulatorText = screen.getByText(/Calculator/i);
  expect(caltulatorText).toBeInTheDocument();
});

test('Quote link to be in the header', () => {
  render(<Header />, {wrapper: BrowserRouter});
  const quoteText = screen.getByText(/Quote/i);
  expect(quoteText).toBeInTheDocument();
});




