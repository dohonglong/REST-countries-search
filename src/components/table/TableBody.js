import { TableBody, TableRow, TableCell } from "@mui/material";
import { Link } from "react-router-dom";

function CountryTableBody({ countries, page, rowsPerPage }) {
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
          </TableRow>
        ))}
    </TableBody>
  );
}

export default CountryTableBody;

/* .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) */
