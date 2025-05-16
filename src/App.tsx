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

export default function App() {
  const [people, setPeople] = useState<Person[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [listsOpen, setListsOpen] = useState(false);

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await fetch('/people.json');
      const data = await response.json();
      setPeople(data);
    };

    fetchPeople();
    setSearchQuery('');
    setListsOpen(false);
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setListsOpen(!!value);
  };

  const filterPeople = (group: Person[]) =>
    group.filter((person) => {
      const query = searchQuery.toLowerCase();
      return (
        person.firstName.toLowerCase().includes(query) ||
        person.lastName.toLowerCase().includes(query) ||
        person.email.toLowerCase().includes(query)
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
