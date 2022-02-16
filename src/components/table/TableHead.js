import { TableHead, TableRow, TableCell } from "@mui/material";

const columns = ["Flag", "Name", "Region", "Language", "Population"];

function CountryTableHead() {
  return (
    <TableHead>
      <TableRow>
        {columns.map((columnName) => (
          <TableCell align="center" key={columnName}>
            {columnName}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default CountryTableHead;