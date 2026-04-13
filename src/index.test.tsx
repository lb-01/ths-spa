import { render, screen } from '@testing-library/preact';
import { describe, it, expect } from 'vitest';
import { App } from './index';


describe('App', () => {
  it('renders spinning GitHub icon and greeting', () => {
    render(<App />);
    expect(screen.getByText(/Hello \[name\]/)).toBeInTheDocument();
  });
});
