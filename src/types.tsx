export type Country = {
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  capital: string[];
  region: string;
  population: number;
};

type Order = "desc" | "asc";

export type DescendingComparator = (
  a: Country,
  b: Country,
  orderBy: string
) => any;

export type GetComparator = (
  order: Order,
  orderBy: string
) => DescendingComparator;

export type StableSort = (
  countries: Country[],
  getComparator: GetComparator
) => Country[];

export type OrderBy = "name" | "capital" | "population" | "region" | "flags";
