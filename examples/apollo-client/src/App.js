import { useState } from 'react';

import Filters from './components/Filters';
import Auth from './components/Auth';
import AllPets from './components/AllPets';

import './App.css';

function App() {
  const [filters, setFilters]= useState({ status: null, category: null});

  const handleChange = (type) => {
    setFilters({...filters, ...type })
  }

  return (
    <div className="App-header">
      <h1>Pet library</h1>
      <div className="auth-section">
        {/* auTH */}
        <Auth />
      </div>
      <Filters handleChange={handleChange} />
      {/* All pets */}
      <AllPets {...filters} />
    </div>
  );
}

export default App;
