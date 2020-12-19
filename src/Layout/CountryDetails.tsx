import BodyContainer from './BodyContainer';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const CountryDetails = (props: any) => {
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
