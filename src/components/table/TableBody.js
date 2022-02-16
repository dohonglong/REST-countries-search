import { TableBody, TableRow, TableCell } from "@mui/material";

function CountryTableBody({ countries, page, rowsPerPage }) {
  return (
    <TableBody>
      {countries
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((country) => (
          <TableRow key={country.name.common}>
            <TableCell>
              <img src={country.flags.png} alt="Flag" />
            </TableCell>
            <TableCell align="left">{country.name.common}</TableCell>
            <TableCell align="left">{country.population}</TableCell>
            <TableCell align="center">{country.region}</TableCell>
            <TableCell align="left">
              {country.languages && Object.values(country.languages).join(", ")}
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
}

export default CountryTableBody;

/* .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) */
