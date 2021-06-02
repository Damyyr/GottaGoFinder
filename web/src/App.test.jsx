import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App.jsx'

test('should render title', () => {
  render(<App />);
  const title = screen.getByText('GottaGoFinder');
  const subTitle = screen.getByText('Make the finder great again');
  expect(title).toBeInTheDocument();
  expect(subTitle).toBeInTheDocument();
})