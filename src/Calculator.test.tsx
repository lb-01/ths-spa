import { render, screen, fireEvent } from '@testing-library/preact';
import { describe, it, expect } from 'vitest';
import { Calculator } from './Calculator';

describe('Calculator', () => {
  it('renders calculator with heading', () => {
    render(<Calculator />);
    expect(screen.getByText('Calculator')).toBeInTheDocument();
  });

  it('renders two number inputs and two buttons', () => {
    render(<Calculator />);
    const inputs = screen.getAllByRole('spinbutton');
    expect(inputs).toHaveLength(2);
    expect(screen.getByText('Add')).toBeInTheDocument();
    expect(screen.getByText('Subtract')).toBeInTheDocument();
  });

  it('adds two numbers correctly', () => {
    render(<Calculator />);
    const [num1Input, num2Input] = screen.getAllByRole('spinbutton');
    const addButton = screen.getByText('Add');

    fireEvent.input(num1Input, { target: { value: '5' } });
    fireEvent.input(num2Input, { target: { value: '3' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Result: 8')).toBeInTheDocument();
  });

  it('subtracts two numbers correctly', () => {
    render(<Calculator />);
    const [num1Input, num2Input] = screen.getAllByRole('spinbutton');
    const subtractButton = screen.getByText('Subtract');

    fireEvent.input(num1Input, { target: { value: '10' } });
    fireEvent.input(num2Input, { target: { value: '4' } });
    fireEvent.click(subtractButton);

    expect(screen.getByText('Result: 6')).toBeInTheDocument();
  });

  it('does not show result before any calculation', () => {
    render(<Calculator />);
    expect(screen.queryByText(/Result:/)).not.toBeInTheDocument();
  });

  it('handles negative results', () => {
    render(<Calculator />);
    const [num1Input, num2Input] = screen.getAllByRole('spinbutton');
    const subtractButton = screen.getByText('Subtract');

    fireEvent.input(num1Input, { target: { value: '3' } });
    fireEvent.input(num2Input, { target: { value: '8' } });
    fireEvent.click(subtractButton);

    expect(screen.getByText('Result: -5')).toBeInTheDocument();
  });
});