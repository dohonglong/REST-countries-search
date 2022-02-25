import React from "react";
import { useSelector } from "react-redux";

function Bookmarks() {
  const bookmarkCountries = useSelector((state) => state.bookmarkCountries);
  return (
    <div>
      <h1>BOOKMARK COUNTRIES</h1>
      <ul>
        {bookmarkCountries.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    </div>
  );
}

export default Bookmarks;
