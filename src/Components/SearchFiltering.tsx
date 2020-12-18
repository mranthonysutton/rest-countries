import React from 'react';
import { HiSearch } from 'react-icons/hi';

const SearchFiltering = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex relative items-center shadow md:w-1/3 w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <HiSearch className="text-gray-500" />
        </span>
        <input
          type="text"
          placeholder="Search for a country..."
          className="py-2 pl-8 w-full rounded-lg border-none focus:ring-0"
        />
      </div>
      <div className="mt-6 md:mt-0">
        <select className="rounded-lg shadow border-none focus:ring-0">
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europ</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFiltering;
