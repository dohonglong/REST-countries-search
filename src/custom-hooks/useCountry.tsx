import { useEffect, useState } from "react";
import { Country } from "../types";

type Return = [Country | null, Error | null];

// This hook is used to fetch one specific country
const useCountry = (name: string): Return => {
  const [country, setCountry] = useState<Country | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchCountry();
  }, [name]);

  return [country, error];
};

export default useCountry;
