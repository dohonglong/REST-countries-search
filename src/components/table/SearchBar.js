import TextField from "@mui/material/TextField";

const SearchBar = ({ handleInput }) => {
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
