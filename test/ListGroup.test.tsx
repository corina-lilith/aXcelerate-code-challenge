import { render, screen, fireEvent } from '@testing-library/react';
import ListGroup from '../src/components/ListGroup';
import '@testing-library/jest-dom';

const peopleMock = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    imgUrl: 'https://example.com/john.jpg',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    imgUrl: 'https://example.com/jane.jpg',
  },
];

describe('ListGroup', () => {
  it('renders the title', () => {
    render(<ListGroup title="Test Group" people={[]} />);
    expect(screen.getByText('Test Group')).toBeInTheDocument();
  });

  it('does not show people initially when forceOpen is not set', () => {
    render(<ListGroup title="Test Group" people={peopleMock} />);
    peopleMock.forEach(person => {

      expect(screen.queryByText(`${person.firstName} ${person.lastName}`)).not.toBeInTheDocument();
    });
  });

  it('toggles the list of people on click', () => {
    render(<ListGroup title="Test Group" people={peopleMock} />);

    peopleMock.forEach(person => {
      const element = screen.queryByText(`${person.firstName} ${person.lastName}`);
      if (element) {
        expect(element).not.toBeVisible();
      }
    });

    fireEvent.click(screen.getByText('Test Group'));

    peopleMock.forEach(person => {
      expect(screen.getByText(`${person.firstName} ${person.lastName}`)).toBeVisible();
    });
  });

  it('respects forceOpen prop to open list initially', () => {
    render(<ListGroup title="Force Open Group" people={peopleMock} forceOpen={true} />);
    peopleMock.forEach(person => {
      expect(screen.getByText(`${person.firstName} ${person.lastName}`)).toBeInTheDocument();
    });
  });
});
