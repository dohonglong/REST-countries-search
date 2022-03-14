import { useDispatch, useSelector } from "react-redux";
import { TableBody, TableRow, TableCell, Button } from "@mui/material";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

import "../../App.css";

import { addBookmark, removeBookmark } from "../../redux/action";
import {
  Country,
  GetComparator,
  Order,
  OrderBy,
  StableSort,
} from "../../types";
import { InitialState } from "../../redux/store";

type TableBodyProps = {
  countries: Country[];
  page: number;
  rowsPerPage: number;
  order: Order;
  orderBy: OrderBy;
  stableSort: StableSort;
  getComparator: GetComparator;
};

function CountryTableBody({
  countries,
  page,
  rowsPerPage,
  order,
  orderBy,
  stableSort,
  getComparator,
}: TableBodyProps) {
  const bookmarkCountries = useSelector(
    (state: InitialState) => state.bookmarkCountries
  );
  const dispatch = useDispatch();

  const ToggleBookmark = (countryName: string) => {
    if (bookmarkCountries.includes(countryName)) {
      dispatch(removeBookmark(countryName));
    } else {
      dispatch(addBookmark(countryName));
    }
  };

  const linkStyle = {
    color: "blue",
    fontWeight: "bold",
    textDecoration: "none",
  };
  const tableCellStyle = {
    fontSize: "15px",
    fontFamily: "Trebuchet MS",
  };

  return (
    <TableBody>
      {stableSort(countries, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((country: Country) => (
          <TableRow key={country.name.common}>
            <TableCell align="center">
              <img src={country.flags.png} height={30} width={45} alt="Flag" />
            </TableCell>
            <TableCell style={tableCellStyle}>
              <Link to={`/country/${country.name.common}`} style={linkStyle}>
                {country.name.common}
              </Link>
            </TableCell>
            <TableCell style={tableCellStyle}>
              {country.capital && Object.keys(country.capital).length > 0
                ? Object.values(country.capital).join(", ")
                : "N/A"}
            </TableCell>
            <TableCell style={tableCellStyle}>{country.region}</TableCell>
            <TableCell align="right" style={tableCellStyle}>
              {country.population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </TableCell>
            <TableCell align="center">
              <Button onClick={() => ToggleBookmark(country.name.common)}>
                {bookmarkCountries.includes(country.name.common) ? (
                  <StarIcon color="primary" />
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
