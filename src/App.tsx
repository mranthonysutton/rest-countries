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
    <div className="h-screen bg-gray-50">
      <Navbar />
      <Route exact path="/">
        <SearchFiltering changeValue={addFilterOptions} />

        <CardContainer filterSettings={filterOptions} />
      </Route>
      <Route path="/:countryCode/:countryName" component={CountryDetails} />
    </div>
  );
}

export default App;
