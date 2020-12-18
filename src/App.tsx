import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Navbar from './Layout/Navbar';
import BodyContainer from './Layout/BodyContainer';
import CardContainer from './Layout/CardContainer';
import SearchFiltering from './Components/SearchFiltering';
import './App.css';

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="h-screen bg-gray-50">
      <Navbar />
      <BodyContainer>
        <SearchFiltering />
      </BodyContainer>
      <BodyContainer>
        <QueryClientProvider client={queryClient}>
          <CardContainer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BodyContainer>
    </div>
  );
}

export default App;
