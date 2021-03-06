import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import CardContainer from './Layout/CardContainer';
import CountryDetails from './Layout/CountryDetails';
import SearchFiltering from './Components/SearchFiltering';
import { SearchFilterOptions } from './types';
import './App.css';

function App() {
  const [
    filterOptions,
    setFilterOptions
  ] = useState<SearchFilterOptions | null>({ region: '', searchTerm: '' });

  const addFilterOptions = (evt: any) => {
    setFilterOptions({ ...filterOptions, [evt.target.name]: evt.target.value });
  };
  return (
    <div className="h-auto bg-gray-50 pb-8 dark:bg-darkModeBackground dark:text-white">
      <Navbar />
      <Route exact path="/">
        <SearchFiltering
          changeValue={addFilterOptions}
          searchValue={filterOptions?.searchTerm}
          regionValue={filterOptions?.region}
        />

        <CardContainer filterSettings={filterOptions} />
      </Route>
      <Route path="/:countryCode/:countryName" component={CountryDetails} />
    </div>
  );
}

export default App;
