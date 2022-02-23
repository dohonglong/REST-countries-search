import { TableHead, TableRow, TableCell } from "@mui/material";

const columns = [
  "Flag",
  "Name",
  "Popuation",
  "Region",
  "Languages",
  "Favorites",
];

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
