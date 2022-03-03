import { TableHead, TableRow, TableCell, TableSortLabel } from "@mui/material";

function CountryTableHead({ orderBy, order, handleRequestSort }) {
  const style = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell
          align="center"
          key="Flag"
          sx={style}
          sortDirection={orderBy === "name" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "name"}
            direction={orderBy === "name" ? order : "asc"}
            onClick={createSortHandler("name")}
          >
            Flag
          </TableSortLabel>
        </TableCell>
        <TableCell
          align="center"
          key="name"
          sx={style}
          sortDirection={orderBy === "name" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "name"}
            direction={orderBy === "name" ? order : "asc"}
            onClick={createSortHandler("name")}
          >
            Name
          </TableSortLabel>
        </TableCell>
        <TableCell
          key="capital"
          sx={style}
          sortDirection={orderBy === "capital" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "capital"}
            direction={orderBy === "capital" ? order : "asc"}
            onClick={createSortHandler("capital")}
          >
            Capital
          </TableSortLabel>
        </TableCell>
        <TableCell
          key="region"
          sx={style}
          sortDirection={orderBy === "region" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "region"}
            direction={orderBy === "region" ? order : "asc"}
            onClick={createSortHandler("region")}
          >
            Region
          </TableSortLabel>
        </TableCell>
        <TableCell
          key="population"
          sx={style}
          sortDirection={orderBy === "population" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "population"}
            direction={orderBy === "population" ? order : "asc"}
            onClick={createSortHandler("population")}
          >
            Population
          </TableSortLabel>
        </TableCell>
        <TableCell align="center" key="bookmark" sx={style}>
          Bookmark
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default CountryTableHead;
