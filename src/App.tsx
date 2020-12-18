import React from 'react';
import Navbar from './Layout/Navbar';
import BodyContainer from './Layout/BodyContainer';
import SearchFiltering from './Components/SearchFiltering';
import './App.css';

function App() {
  return (
    <div className="h-screen bg-gray-50">
      <Navbar />
      <BodyContainer>
        <SearchFiltering />
      </BodyContainer>
      <BodyContainer>
        <div className="p-8">
          <h1>Cards</h1>
        </div>
      </BodyContainer>
    </div>
  );
}

export default App;
