import { TablePagination } from "@mui/material";
import { Country, SetPage } from "../../types";

type CountryTablePaginationProps = {
  countries: Country[];
  page: number;
  rowsPerPage: number;
  setPage: SetPage;
};

function CountryTablePagination({
  countries,
  page,
  setPage,
  rowsPerPage,
}: CountryTablePaginationProps) {
  /* Handle page change */
  const handleChangePage = (event: unknown, newPage: number) => {
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
