import BodyContainer from './BodyContainer';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { UseQueryTypes, URLParamTypes } from '../types';

const CountryDetails = (props: any) => {
  const { countryCode }: URLParamTypes = useParams();
  const { isLoading, error, data }: UseQueryTypes = useQuery('countryData');

  let filteredCountry: any;

  if (data)
    [filteredCountry] = data.filter((c: any) => c.alpha2Code === countryCode);

  console.log(filteredCountry);

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
    </BodyContainer>
  );
};

export default CountryDetails;
