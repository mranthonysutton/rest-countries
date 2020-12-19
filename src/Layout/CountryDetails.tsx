import BodyContainer from './BodyContainer';
import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { UseQueryTypes, URLParamTypes, FilteredCountryTypes } from '../types';

const CountryDetails = (props: any) => {
  const { countryCode }: URLParamTypes = useParams();
  const { isLoading, error, data }: UseQueryTypes = useQuery('countryData');

  let filteredCountry: any;
  let borderedCountries: Array<FilteredCountryTypes> = [];

  if (data)
    [filteredCountry] = data.filter((c: any) => c.alpha2Code === countryCode);

  if (filteredCountry) {
    console.log(filteredCountry);
    filteredCountry.borders.forEach((i: string) => {
      data.forEach((c: any) => {
        if (c.alpha3Code === i)
          borderedCountries.push({
            countryName: c.name,
            countryCode: c.alpha2Code
          });
      });
    });
  }

  return (
    <BodyContainer>
      <button
        className="flex items-center text-lg justify-center shadow rounded-lg py-2 w-32"
        onClick={() => props.history.push('/')}
      >
        <span className="pr-1">
          <HiArrowNarrowLeft className="text-2xl" />
        </span>
        <span>Back</span>
      </button>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error obtaining data...</h1>}
      {data && filteredCountry && (
        <BodyContainer>
          <div className="flex justify-between">
            <div className="w-2/4">
              <img
                src={filteredCountry.flag}
                alt={filteredCountry.name}
                className="shadow border"
              />
            </div>
            <div className="w-2/4 py-8 px-2 flex flex-col justify-center pl-8">
              <h3 className="text-2xl font-extrabold mb-8">
                {filteredCountry.name}
              </h3>
              <div className="flex justify-between">
                <div className="pr-8 mb-20">
                  <p>
                    <span className="font-semibold">Native Name: </span>
                    {filteredCountry.nativeName}
                  </p>
                  <p>
                    <span className="font-semibold">Population: </span>
                    {filteredCountry.population.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    {filteredCountry.region}
                  </p>
                  <p>
                    <span className="font-semibold">Sub Region: </span>
                    {filteredCountry.subRegion}
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    {filteredCountry.capital}
                  </p>
                </div>
              </div>
              <div>
                {borderedCountries.length > 0 && (
                  <div className="flex flex-wrap justify-start">
                    <p className="font-semibold py-1 mr-2">Border Countries:</p>
                    {borderedCountries.map((bc: FilteredCountryTypes) => (
                      <Link
                        to={`/${bc.countryCode}/${bc.countryName}`}
                        key={bc.countryCode}
                      >
                        <p className="border px-2 py-1 shadow mb-2 mr-2 cursor-pointer rounded-lg">
                          {bc.countryName}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </BodyContainer>
      )}
    </BodyContainer>
  );
};

export default CountryDetails;
