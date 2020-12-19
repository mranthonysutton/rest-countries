type CardCountryProps = {
  key: string;
  countryName: string;
  population: string | number;
  region: string;
  capital: string;
  flag: string;
};

const CountryCard = ({
  key,
  countryName,
  population,
  region,
  capital,
  flag
}: CardCountryProps) => {
  return (
    <div
      className="shadow rounded-lg border hover:shadow-md cursor-pointer"
      key={key}
    >
      <div>
        <img src={flag} alt={countryName} className="rounded" />
      </div>
      <div className="p-4">
        <p className="font-bold pb-4">{countryName}</p>
        <div>
          <p>
            <span className="font-semibold mr-2">Population:</span>
            {population}
          </p>
          <p>
            <span className="font-semibold mr-2">Region:</span>
            {region}
          </p>
          <p>
            <span className="font-semibold mr-2">Capital:</span>
            {capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
