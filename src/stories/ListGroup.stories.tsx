import type { Meta } from '@storybook/react';
import ListGroup from '../components/ListGroup';
import people from '../../test/people';

const meta: Meta<typeof ListGroup> = {
  title: 'Components/ListGroup',
  component: ListGroup,
  tags: ['autodocs'],
};

export default meta;

export const Default = () => <ListGroup title="Team Members" people={people} />;

export const ForceOpen = () => (
  <ListGroup title="Team Members" people={people} forceOpen={true} />
);

export const HideEmail = () => (
  <ListGroup title="Team Members" people={people} forceOpen={true} shouldDisplayEmail={false} />
);
