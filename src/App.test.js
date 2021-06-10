/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App';

afterEach(cleanup)

describe('This will test App component', () => {

  it('renders welcome message', () => {
    render(<App />);
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });

});
