import reducer from "./redux/reducer";

export type Country = {
  flags: {
    png: string;
  };
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  region: string;
  population: number;
  subregion: string;
  timezones: string[];
  area: number;
  languages: { [key: string]: string };
};

export type Order = "desc" | "asc";
export type OrderBy = "name" | "capital" | "population" | "region";

export type RootState = ReturnType<typeof reducer>;

export type GetComparator = (
  order: Order,
  orderBy: OrderBy
) => (a: Country, b: Country) => number;

export type StableSort = (
  countries: Country[],
  comparator: (a: Country, b: Country) => number
) => Country[];
