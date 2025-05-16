import { render, screen } from '@testing-library/react';
// import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the search input field', () => {
    render(
      <App />
    );
    const input = screen.getByText(/Chicken/i);
    expect(input).toBeInTheDocument();
  });
});
