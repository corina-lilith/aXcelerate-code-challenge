import { useState, useEffect } from 'react';
import MuiList from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';

const StyledList = styled(MuiList)`
  background-color: white;
  color: black;
  border: 1px solid #d5d5d5;
  margin-top: -1px;
  padding-left: 11px
`;

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  imgUrl: string;
}

interface ListGroupProps {
  title: string;
  people: Person[];
  forceOpen?: boolean;
  shouldDisplayEmail?: boolean;
}

export const ListGroup: React.FC<ListGroupProps> = ({ title, people, forceOpen = false, shouldDisplayEmail = true }) => {
  const [openList, setOpenList] = useState(false);

  useEffect(() => {
    setOpenList(forceOpen);
  }, [forceOpen]);

  const handleListClick = () => {
    setOpenList((prev) => !prev);
  };

  return (
    <StyledList
      aria-labelledby={`${title.toLowerCase()}-list-subheader`}
    >
      <ListItemButton onClick={handleListClick}>
        <ListItemText primary={title} />
        {openList ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openList} unmountOnExit>
        <MuiList component="div" disablePadding>
          {people.map((person) => (
            <ListItemButton key={person.id} sx={{ pl: 4 }}>
              <ListItemIcon>
                <Avatar
                  alt={`${person.firstName}'s avatar`}
                  src={person.imgUrl}
                />
              </ListItemIcon>
              <ListItemText
                primary={`${person.firstName} ${person.lastName}`}
                secondary={shouldDisplayEmail && person.email}
              />
            </ListItemButton>
          ))}
        </MuiList>
      </Collapse>
    </StyledList>
  );
};

export default ListGroup;