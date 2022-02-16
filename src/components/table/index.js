import { useState } from "react";
import Table from "@mui/material/Table";
import { TableContainer } from "@mui/material";

import useCountries from "../../custom-hooks/useCountries";

import CountryTableHead from "./TableHead";
import CountryTableBody from "./TableBody";
import CountryTablePagination from "./TablePagination";

function CountryTable() {
  const [countries, error] = useCountries();
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const [page, setPage] = useState(0);

  /* Catch error */
  if (error) {
    return <p>Something went wrong.</p>;
  }

  return (
    <div>
      <TableContainer>
        <Table sx={{ width: "100%" }}>
          <colgroup>
            <col style={{ width: "25%", border: "1px solid black" }} />
            <col style={{ width: "10%", border: "1px solid black" }} />
            <col style={{ width: "10%", border: "1px solid black" }} />
            <col style={{ width: "10%", border: "1px solid black" }} />
            <col style={{ width: "auto", border: "1px solid black" }} />
          </colgroup>
          <CountryTableHead />
          <CountryTableBody
            countries={countries}
            rowsPerPage={rowsPerPage}
            page={page}
          />
        </Table>
      </TableContainer>
      <CountryTablePagination
        countries={countries}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </div>
  );
}

export default CountryTable;
