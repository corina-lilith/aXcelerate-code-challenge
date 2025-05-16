import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SearchField from '../components/SearchField';

const meta: Meta<typeof SearchField> = {
  title: 'Components/SearchField',
  component: SearchField,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SearchField>;

const SearchFieldWrapper = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchField
      value={searchValue}
      onFocus={() => console.log('Search field focused')}
      onSearchChange={(value) => {
        console.log('Search changed to:', value);
        setSearchValue(value);
      }}
    />
  );
};

export const Default: Story = {
  render: () => <SearchFieldWrapper />,
};
