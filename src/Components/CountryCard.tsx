import { CardCountryProps } from '../types';

const CountryCard = ({
  countryName,
  population,
  region,
  capital,
  flag
}: CardCountryProps) => {
  return (
    <div className="shadow rounded-lg dark:border-transparent dark:bg-darkBlue border hover:shadow-md cursor-pointer">
      <div>
        <img
          src={flag}
          alt={countryName}
          className="dark:border-0 rounded h-52 object-cover w-full"
        />
      </div>
      <div className="p-4">
        <p className="font-bold pb-4 text-2xl">{countryName}</p>
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
