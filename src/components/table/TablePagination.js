import { TablePagination } from "@mui/material";

function CountryTablePagination({
  countries,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
}) {
  /* Handle page change */
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      count={countries.length}
      rowsPerPageOptions={[]}
      component="div"
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

export default CountryTablePagination;
