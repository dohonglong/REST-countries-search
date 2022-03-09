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

  return (
    <TablePagination
      count={countries.length}
      rowsPerPageOptions={[]}
      component="div"
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
    />
  );
}

export default CountryTablePagination;
