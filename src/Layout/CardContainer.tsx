import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import CountryCard from '../Components/CountryCard';
import BodyContainer from '../Layout/BodyContainer';
import { UseQueryTypes } from '../types';

const CardContainer = () => {
  const { isLoading, error, data }: UseQueryTypes = useQuery('countryData');

  return (
    <BodyContainer>
      <div className="flex flex-wrap">
        {isLoading && <h1>Loading...</h1>}
        {error && <p>Broke</p>}
        {data && (
          <div className="grid md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-x-16 gap-y-16">
            {data.map((c: any) => (
              <Link to={`/${c.alpha2Code}/${c.name}`}>
                <CountryCard
                  key={c.alpha2Code}
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
