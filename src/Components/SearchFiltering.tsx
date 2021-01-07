import React from 'react';
import { HiSearch } from 'react-icons/hi';
import BodyContainer from '../Layout/BodyContainer';

const SearchFiltering = (props: any) => {
  return (
    <BodyContainer>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex relative items-center shadow md:w-1/3 w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <HiSearch className="text-gray-500 dark:text-white" />
          </span>
          <input
            value={props.filterOptions?.searchTerm}
            name="searchTerm"
            onChange={props.changeValue}
            type="text"
            placeholder="Search for a country..."
            className="py-2 pl-8 w-full rounded-lg border-none outline-none focus:ring-0 dark:bg-darkBlue dark:text-white dark:focus-ring-0 dark:placeholder-white"
          />
        </div>
        <div className="mt-6 md:mt-0">
          <div className="relative dark:bg-darkBlue rounded">
            <select
              className="bg-transparent rounded-lg shadow border-none focus:ring-0 dark:text-white appearance-none"
              name="region"
              value={props.filterOptions?.region}
              onChange={props.changeValue}
            >
              <option value="">All Regions</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
    </BodyContainer>
  );
};

export default SearchFiltering;
