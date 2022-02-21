import React from "react";
import { useParams } from "react-router-dom";

import useCountry from "../../custom-hooks/useCountry";

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

  return (
    <div>
      <h1>{country.name.common}</h1>
    </div>
  );
}

export default CountryPage;
