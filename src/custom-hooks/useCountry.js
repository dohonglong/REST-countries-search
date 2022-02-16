import { useEffect, useState } from "react";
// This hook is used to fetch one specific country
const useCountry = (name) => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        setError(error);
      }
    };

    fetchCountry();
  }, [name]);

  return [country, error];
};

export default useCountry;
