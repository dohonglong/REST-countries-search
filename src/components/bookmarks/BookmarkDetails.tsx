import { TableBody, TableRow, TableCell, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

function BookmarkDetails({ bookmarkCountries, removeBookmarkCountry }) {
  const linkStyle = {
    color: "blue",
    fontWeight: "bold",
    textDecoration: "none",
  };
  const tableCellStyle = {
    fontSize: "20px",
    fontFamily: "Trebuchet MS",
  };

  return (
    <TableBody>
      {bookmarkCountries.map((country) => (
        <TableRow key={country}>
          <TableCell style={tableCellStyle}>
            <Link to={`/country/${country}`} style={linkStyle}>
              {country}
            </Link>
          </TableCell>
          <TableCell align="center">
            <Button
              variant="outlined"
              color="error"
              onClick={() => removeBookmarkCountry(country)}
              startIcon={<DeleteIcon />}
            >
              Remove
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default BookmarkDetails;
