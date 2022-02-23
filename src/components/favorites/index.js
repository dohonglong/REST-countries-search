import React from "react";
import { useSelector } from "react-redux";

function Favorites() {
  const favoriteCountries = useSelector((state) => state.favoriteCountries);
  return (
    <div>
      <ul>
        {favoriteCountries.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
