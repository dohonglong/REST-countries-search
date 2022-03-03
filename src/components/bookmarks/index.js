import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TableContainer, Table } from "@mui/material";

import GoBackButton from "../buttons/GoBackButton";
import ClearAllButton from "../buttons/ClearAllButton";

import { removeBookmark, clearBookmark } from "../../redux/action";
import BookmarkDetails from "./BookmarkDetails";
import Grid from "@mui/material/Grid";

function Bookmarks() {
  const bookmarkCountries = useSelector((state) => state.bookmarkCountries);
  const dispatch = useDispatch();

  const removeBookmarkCountry = (country) => {
    dispatch(removeBookmark(country));
  };

  const removeAll = () => {
    dispatch(clearBookmark());
  };
  const tableStyle = {
    width: "90%",
    margin: "auto",
  };

  return (
    <div className="container">
      <h1 className="title">BOOKMARK COUNTRIES</h1>
      <TableContainer>
        <Table style={tableStyle}>
          <colgroup>
            <col style={{ width: "75%" }} />
            <col style={{ width: "auto" }} />
          </colgroup>
          <BookmarkDetails
            bookmarkCountries={bookmarkCountries}
            removeBookmarkCountry={removeBookmarkCountry}
          />
        </Table>
      </TableContainer>
      <Grid container>
        <Grid item xs={6}>
          <ClearAllButton removeAll={removeAll} />
        </Grid>
        <Grid item xs={6}>
          <GoBackButton />
        </Grid>
      </Grid>
    </div>
  );
}

export default Bookmarks;
