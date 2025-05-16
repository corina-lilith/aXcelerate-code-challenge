import ListGroup from '../components/ListGroup';

export default {
  title: 'Components/ListGroup',
  component: ListGroup,
};

const samplePeople = [
  {
    id: 1,
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    imgUrl: 'https://i.pravatar.cc/40?img=1',
  },
  {
    id: 2,
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob.smith@example.com',
    imgUrl: 'https://i.pravatar.cc/40?img=2',
  },
  {
    id: 3,
    firstName: 'Charlie',
    lastName: 'Brown',
    email: 'charlie.brown@example.com',
    imgUrl: 'https://i.pravatar.cc/40?img=3',
  },
];

export const Default = () => <ListGroup title="Team Members" people={samplePeople} />;

export const ForceOpen = () => (
  <ListGroup title="Team Members" people={samplePeople} forceOpen={true} />
);
