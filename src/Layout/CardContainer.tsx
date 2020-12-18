import { useQuery } from 'react-query';
import axios from 'axios';

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
        <div className="grid grid-cols-4 gap-40">
          {data.map((country: any) => (
            <div className="shadow rounded-lg" key={country.alpha2Code}>
              <div>
                <img src={country.flag} alt={country.name} />
              </div>
              <div className="p-4">
                <h1>{country.name}</h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardContainer;
