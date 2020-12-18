import { useQuery } from 'react-query';
import axios from 'axios';
import CountryCard from '../Components/CountryCard';

const CardContainer = () => {
  const { isLoading, error, data } = useQuery('countryData', async () => {
    const res = await axios.get('https://restcountries.eu/rest/v2/all');
    return res.data;
  });

  return (
    <div className="flex flex-wrap">
      {isLoading && <h1>Loading...</h1>}
      {error && <p>Broke</p>}
      {data && (
        <div className="grid grid-cols-4 gap-x-32 gap-y-16">
          {data.map((c: any) => (
            <CountryCard
              key={c.alpha2Code}
              countryName={c.name}
              capital={c.capital}
              region={c.region}
              population={c.population.toLocaleString()}
              flag={c.flag}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default CardContainer;
