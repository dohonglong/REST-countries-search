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
export type RootState = ReturnType<typeof reducer>;
export type Order = "desc" | "asc";
export type OrderBy = "name" | "capital" | "population" | "region";
export type SetPage = (newPage: number) => void;
export type SetRowsPerPage = () => void;

export type GetComparator = (
  order: Order,
  orderBy: OrderBy
) => (a: Country, b: Country) => number;

export type StableSort = (
  countries: Country[],
  comparator: (a: Country, b: Country) => number
) => Country[];

export type HandleRequestSort = (
  event: React.MouseEvent<unknown>,
  property: OrderBy
) => void;

export type HandelInput = (event: { target: { value: string } }) => void;

export type RemoveBookmarkCountry = (country: string) => void;

export type RemoveAll = () => void;
