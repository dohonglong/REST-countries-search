import { useState } from "react";
import { TableContainer, Table } from "@mui/material";

import useCountries from "../../custom-hooks/useCountries";

import "../../App.css";
import CountryTableHead from "./TableHead";
import CountryTableBody from "./TableBody";
import CountryTablePagination from "./TablePagination";
import SearchBar from "./SearchBar";
import BookmarksButton from "../buttons/BookmarksButton";
import { Country, Order, OrderBy } from "../../types";

function CountryTable() {
  const [countries, error] = useCountries();
  const [countriesUpdated, errorUpdated, setCountriesUpdated] = useCountries();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<OrderBy>("name");

  /* For sorting */
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: OrderBy
  ) => {
    const isAscending = orderBy === property && order === "asc";
    setOrder(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  function descendingComparator(a: Country, b: Country, orderBy: OrderBy) {
    if (orderBy === "name") {
      if (b.name.common < a.name.common) {
        return -1;
      }
      if (b.name.common > a.name.common) {
        return 1;
      }
      return 0;
    } else {
      if (b[orderBy] < a[orderBy]) {
        return -1;
      }
      if (b[orderBy] > a[orderBy]) {
        return 1;
      }
      //In case some values are the same (notably region), then country name will be compared
      if (b[orderBy] === a[orderBy]) {
        if (b.name.common < a.name.common) {
          return -1;
        }
        if (b.name.common > a.name.common) {
          return 1;
        }
        return 0;
      }
      return 0;
    }
  }

  function getComparator(order: string, orderBy: OrderBy) {
    return order === "desc"
      ? (a: Country, b: Country) => descendingComparator(a, b, orderBy)
      : (a: Country, b: Country) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(
    countries: Country[],
    comparator: (a: Country, b: Country) => number
  ) {
    const stabilizedThis = countries.map(
      (el, index) => [el, index] as [Country, number]
    );
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  /* Catch error */
  if (error || errorUpdated) {
    return <p>Something went wrong.</p>;
  }

  /* Get input from search bar*/
  const handleInput = (event: { target: { value: string } }) => {
    const result = event.target.value.toLowerCase();
    const countryFiltered = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(result);
    });
    setCountriesUpdated(countryFiltered);
    setPage(0);
  };

  return (
    <div className="container">
      <h1 className="title">COUNTRY SEARCH</h1>
      <SearchBar handleInput={handleInput} />
      <BookmarksButton />
      <TableContainer>
        <Table>
          <colgroup>
            <col style={{ width: "10%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "auto" }} />
          </colgroup>
          <CountryTableHead
            orderBy={orderBy}
            order={order}
            handleRequestSort={handleRequestSort}
          />

          <CountryTableBody
            countries={countriesUpdated}
            rowsPerPage={rowsPerPage}
            page={page}
            order={order}
            orderBy={orderBy}
            stableSort={stableSort}
            getComparator={getComparator}
          />
        </Table>
      </TableContainer>
      <CountryTablePagination
        countries={countriesUpdated}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </div>
  );
}

export default CountryTable;
