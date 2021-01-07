import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import CountryCard from '../Components/CountryCard';
import BodyContainer from '../Layout/BodyContainer';
import {
  filterRegexRegion,
  filterRegexSearchTerm
} from '../utils/filterRegexSearch';
import { UseQueryTypes } from '../types';

const CardContainer = (props: any) => {
  const { isLoading, error, data }: UseQueryTypes = useQuery('countryData');
  let filteredData: Array<any> = [];
  const isSearching =
    props.filterSettings.region.length > 0 ||
    props.filterSettings.searchTerm.length > 0;

  if (
    (data && props.filterSettings.region.length > 0) ||
    props.filterSettings.searchTerm.length > 0
  ) {
    // Just the region is filled out
    if (
      props.filterSettings.region.length > 0 &&
      props.filterSettings.searchTerm.length === 0
    ) {
      filteredData = filterRegexRegion(data, props.filterSettings.region);
    }

    // just the search term is filled out
    else if (
      props.filterSettings.searchTerm.length > 0 &&
      props.filterSettings.region.length === 0
    ) {
      filteredData = filterRegexSearchTerm(
        data,
        props.filterSettings.searchTerm
      );
    } else {
      // Filter first by the searchTerm, and then by the region
      filteredData = filterRegexSearchTerm(
        data,
        props.filterSettings.searchTerm
      );
      filteredData = filterRegexRegion(
        filteredData,
        props.filterSettings.region
      );
    }
  }

  const dataToFilter =
    data?.length > 0 && filteredData.length === 0 && !isSearching
      ? data
      : filteredData;

  return (
    <BodyContainer>
      <div className="flex flex-wrap">
        {isLoading && <h1>Loading...</h1>}
        {error && <p>Broke</p>}
        {data && (
          <div className="grid w-full md:w-auto md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-x-16 gap-y-16">
            {dataToFilter.length === 0 && (
              <div className="w-full shadow border dark:border-transparent border-red-100 rounded-lg p-4 bg-red-100 text-red-600 font-semibold">
                <p>Unable to find a country with the search parameters...</p>
              </div>
            )}
            {dataToFilter.map((c: any) => (
              <Link to={`/${c.alpha2Code}/${c.name}`} key={c.alpha2Code}>
                <CountryCard
                  countryName={c.name}
                  capital={c.capital}
                  region={c.region}
                  population={c.population.toLocaleString()}
                  flag={c.flag}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </BodyContainer>
  );
};
export default CardContainer;
