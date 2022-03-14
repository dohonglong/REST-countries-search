import TextField from "@mui/material/TextField";
import { HandelInput } from "../../types";

type SearchBarProps = {
  handleInput: HandelInput;
};

const SearchBar = ({ handleInput }: SearchBarProps) => {
  return (
    <div>
      <TextField
        fullWidth
        id="search-bar"
        label="Type country to search"
        variant="outlined"
        onChange={(inputValue) => handleInput(inputValue)}
      ></TextField>
    </div>
  );
};

export default SearchBar;
