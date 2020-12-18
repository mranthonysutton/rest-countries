import React from 'react';
import Navbar from './Layout/Navbar';
import BodyContainer from './Layout/BodyContainer';
import './App.css';

function App() {
  return (
    <div className="h-screen bg-gray-50">
      <Navbar />
      <BodyContainer>
        <h1>Input & Filtering</h1>
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
