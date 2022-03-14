import { TableBody, TableRow, TableCell } from "@mui/material";
import { Country } from "../../types";

type CountryDetailProps = {
  country: Country;
};

function CountryDetail({ country }: CountryDetailProps) {
  return (
    <TableBody>
      <TableRow>
        <TableCell variant="head">Capital</TableCell>
        <TableCell>
          {country.capital && Object.keys(country.capital).length > 0
            ? Object.values(country.capital).join(", ")
            : "N/A"}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell variant="head">Languages</TableCell>
        <TableCell>
          {country.languages && Object.keys(country.languages).length > 0
            ? Object.values(country.languages).join(", ")
            : "N/A"}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell variant="head">Region</TableCell>
        <TableCell>{country.region}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell variant="head">Subregion</TableCell>
        <TableCell>{country.subregion}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell variant="head">Area</TableCell>
        <TableCell>
          {country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km²
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell variant="head">Population</TableCell>
        <TableCell>
          {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell variant="head">Time zones</TableCell>
        <TableCell>{country.timezones.join(", ")}</TableCell>
      </TableRow>
    </TableBody>
  );
}

export default CountryDetail;
