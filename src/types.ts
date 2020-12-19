export type CardCountryProps = {
  countryName: string;
  population: string | number;
  region: string;
  capital: string;
  flag: string;
};

export type UseQueryTypes = {
  isLoading: boolean | null;
  error: string | null;
  data?: any;
};

export type URLParamTypes = {
  countryCode: string;
  countryName: string;
};

export type FilteredCountryTypes = {
  countryCode: string;
  countryName: string;
};
