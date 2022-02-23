import { TableBody, TableRow, TableCell } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import "../../App.css";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addBookmark } from "../../redux/action";
import { removeBookmark } from "../../redux/action";

function CountryTableBody({ countries, page, rowsPerPage }) {
  const bookmarkCountries = useSelector((state) => state.bookmarkCountries);
  const dispatch = useDispatch();

  const ToggleBookmark = (countryName) => {
    if (bookmarkCountries.includes(countryName)) {
      dispatch(removeBookmark(countryName));
    } else {
      dispatch(addBookmark(countryName));
    }
  };

  return (
    <TableBody>
      {countries
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((country) => (
          <TableRow key={country.name.common}>
            <TableCell align="center">
              <img src={country.flags.png} height={30} alt="Flag" />
            </TableCell>
            <TableCell align="left">
              <Link to={`/country/${country.name.common}`}>
                {country.name.common}
              </Link>
            </TableCell>
            <TableCell align="center">{country.population}</TableCell>
            <TableCell align="center">{country.region}</TableCell>
            <TableCell align="left">
              {country.languages && Object.keys(country.languages).length > 0
                ? Object.values(country.languages).join(", ")
                : "none"}
            </TableCell>
            <TableCell align="center">
              <Button onClick={() => ToggleBookmark(country.name.common)}>
                {bookmarkCountries.includes(country.name.common) ? (
                  <StarIcon color="default" />
                ) : (
                  <StarIcon color="disabled" />
                )}
              </Button>
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
}

export default CountryTableBody;
