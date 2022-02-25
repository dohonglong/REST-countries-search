import { useState } from "react";
import { TableContainer, Table } from "@mui/material";

import useCountries from "../../custom-hooks/useCountries";

import "../../App.css";
import CountryTableHead from "./TableHead";
import CountryTableBody from "./TableBody";
import CountryTablePagination from "./TablePagination";
import SearchBar from "./SearchBar";

function CountryTable() {
  const [countries, error] = useCountries();
  const [countriesUpdated, errorUpdated, setCountriesUpdated] = useCountries();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  /* Catch error */
  if (error || errorUpdated) {
    return <p>Something went wrong.</p>;
  }

  /* Get input from search bar*/
  const handleInput = (event) => {
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
      <TableContainer>
        <Table>
          <colgroup>
            <col style={{ width: "15%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "auto" }} />
          </colgroup>
          <CountryTableHead />
          <CountryTableBody
            countries={countriesUpdated}
            rowsPerPage={rowsPerPage}
            page={page}
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
