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

  if (
    (data && props.filterSettings.region.length > 0) ||
    props.filterSettings.searchTerm.length > 0
  ) {
    let filteredRegion: Array<any> = [];
    let filteredSearch: Array<any> = [];

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

  console.log(filteredData);

  return (
    <BodyContainer>
      <div className="flex flex-wrap">
        {isLoading && <h1>Loading...</h1>}
        {error && <p>Broke</p>}
        {data && (
          <div className="grid w-full md:w-auto md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-x-16 gap-y-16">
            {data.map((c: any) => (
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
