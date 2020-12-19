import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import CardContainer from './Layout/CardContainer';
import CountryDetails from './Layout/CountryDetails';
import SearchFiltering from './Components/SearchFiltering';
import './App.css';

function App() {
  return (
    <div className="h-screen bg-gray-50">
      <Navbar />
      <Route exact path="/">
        <SearchFiltering />
        <CardContainer />
      </Route>
      <Route path="/:countryCode/:countryName" component={CountryDetails} />
    </div>
  );
}

export default App;
