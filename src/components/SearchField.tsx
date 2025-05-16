import MuiBox from '@mui/material/Box';
import MuiTextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import styled from 'styled-components';

const StyledBox = styled(MuiBox)`
display: flex; 
align-items: flex-end
`;

const StyledTextField = styled(MuiTextField)`
z-index: 1;
border-radius: 0px;
width: 251px 
`;

interface SearchFieldProps {
  onFocus: () => void;
  onSearchChange: (value: string) => void;
  value: string;
}

export const SearchField: React.FC<SearchFieldProps> = ({ onFocus, onSearchChange, value }) => {
  return (
    <div>
      <StyledBox>
        <StyledTextField
          id="search"
          placeholder="Search"
          value={value}
          onFocus={onFocus}
          onChange={(e) => onSearchChange(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                borderRadius: 0
              },
            },
          }}
        />
      </StyledBox>
    </div>
  );
};

export default SearchField;
