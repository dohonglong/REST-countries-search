import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TableContainer, Table, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import "../../App.css";
import CountryDetail from "./CountryDetail";
import GoBackButton from "../buttons/GoBackButton";

import useCountry from "../../custom-hooks/useCountry";

import { addBookmark, removeBookmark } from "../../redux/action";
import { InitialState } from "../../redux/store";

function CountryPage() {
  const { name } = useParams();
  const [country, error] = useCountry(name as string);
  const bookmarkCountries = useSelector(
    (state: InitialState) => state.bookmarkCountries
  );
  const dispatch = useDispatch();

  const ToggleBookmarkCountry = (country: string) => {
    if (bookmarkCountries.includes(country)) {
      dispatch(removeBookmark(country));
    } else {
      dispatch(addBookmark(country));
    }
  };

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
        <img src={country.flags.png} alt="Flag" width={"25%"} />
      </div>
      <Button onClick={() => ToggleBookmarkCountry(country.name.common)}>
        {bookmarkCountries.includes(country.name.common) ? (
          <StarIcon fontSize="large" color="primary" />
        ) : (
          <StarIcon fontSize="large" color="disabled" />
        )}
      </Button>
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
