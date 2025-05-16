import type { Meta } from '@storybook/react';
import App from '../App';
import people from '../../test/people';

const meta: Meta<typeof App> = {
  title: 'Example/App',
  component: App,
  tags: ['autodocs'],
}

export default meta;

export const Default = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: 400 }}>
      <App people={people} />
    </div>
  )
}