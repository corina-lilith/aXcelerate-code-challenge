import { useEffect, useState } from 'react';
import './App.css';
import ListGroup from './components/ListGroup';
import SearchField from './components/SearchField';

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  imgUrl: string;
  hasAttended: boolean;
}

interface AppProps {
  people: Person[];
}

export const App: React.FC<AppProps> = (props) => {
  const [people, setPeople] = useState<Person[]>(props.people);
  const [searchQuery, setSearchQuery] = useState('');
  const [listsOpen, setListsOpen] = useState(true);

  useEffect(() => {
    setPeople(people);
    setSearchQuery('');
  }, [people]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setListsOpen(!!value);
  };

  const filterPeople = (group: Person[]) =>
    group.filter((person) => {
      const query = searchQuery.toLowerCase();
      // match on first name only as per design
      return (
        person.firstName.toLowerCase().startsWith(query)
      );
    });

  const attended = filterPeople(people.filter((p) => p.hasAttended));
  const absent = filterPeople(people.filter((p) => !p.hasAttended));

  return (
    <div style={{ padding: '2rem' }}>
      <SearchField
        value={searchQuery}
        onFocus={() => setListsOpen(true)}
        onSearchChange={handleSearchChange}
      />

      {listsOpen && (
        <>
          <ListGroup title="Attended" people={attended} forceOpen={listsOpen} />
          <ListGroup title="Absent" people={absent} forceOpen={listsOpen} />
        </>
      )}
    </div>
  );
}

export default App;
