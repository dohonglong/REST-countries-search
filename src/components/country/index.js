import { useParams } from "react-router-dom";

import { TableContainer, Table } from "@mui/material";

import useCountry from "../../custom-hooks/useCountry";

import "../../App.css";
import CountryDetail from "./CountryDetail";
import GoBackButton from "../buttons/GoBackButton";

function CountryPage() {
  const { name } = useParams();
  const [country, error] = useCountry(name);

  /* Catch error */
  if (error) {
    return <p>Something went wrong.</p>;
  }

  if (!country) {
    return <p>Loading...</p>;
  }

  const tableStyle = {
    width: "50%",
    margin: "auto",
  };

  return (
    <div className="container">
      <div className="container_header">
        <h1 className="title">{country.name.common}</h1>
        <h2 className="subtitle">({country.name.official})</h2>
        <img src={country.flags.png} alt="Flag" width={"20%"} />
      </div>
      <TableContainer>
        <Table style={tableStyle}>
          <colgroup>
            <col style={{ width: "25%" }} />
            <col style={{ width: "auto" }} />
          </colgroup>
          <CountryDetail country={country} />
        </Table>
        <GoBackButton />
      </TableContainer>
    </div>
  );
}

export default CountryPage;
