import { TableHead, TableRow, TableCell } from "@mui/material";

const columns = ["Flag", "Name", "Capital", "Region", "Population", "Boomark"];

function CountryTableHead() {
  const style = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((columnName) => (
          <TableCell align="center" key={columnName} sx={style}>
            {columnName}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default CountryTableHead;
