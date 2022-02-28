import React from "react";
import { useSelector } from "react-redux";
import GoBackButton from "../buttons/GoBackButton";

function Bookmarks() {
  const bookmarkCountries = useSelector((state) => state.bookmarkCountries);
  return (
    <div>
      <h1>BOOKMARK COUNTRIES</h1>
      <ul>
        {bookmarkCountries.map((country) => (
          <li key={country}>
            {country}
            <button>Remove</button>
          </li>
        ))}
      </ul>
      <GoBackButton />
    </div>
  );
}

export default Bookmarks;
