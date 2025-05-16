import { render, screen, fireEvent } from '@testing-library/react';
import SearchField from './SearchField';

describe('SearchField', () => {
  it('calls onFocus when the input is focused', () => {
    let focused = false;
    const onFocus = () => {
      focused = true;
    };

    render(<SearchField onFocus={onFocus} onSearchChange={() => { }} value="" />);
    const input = screen.getByPlaceholderText('Search');

    fireEvent.focus(input);
    expect(focused).toBe(true);
  });

  it('calls onSearchChange with the correct value when typing', () => {
    let searchedValue = '';
    const onSearchChange = (value: string) => {
      searchedValue = value;
    };

    render(<SearchField onFocus={() => { }} onSearchChange={onSearchChange} value="" />);
    const input = screen.getByPlaceholderText('Search');

    fireEvent.change(input, { target: { value: 'test' } });
    expect(searchedValue).toBe('test');
  });
});
