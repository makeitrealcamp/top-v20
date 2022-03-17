import { useState } from 'react';

import ButtonAdd from './components/ButtonAdd';
import ButtonRemove from './components/ButtonRemove';
import ButtonMultiplicar from './components/ButtonMultiplar';
import Counter from './components/Counter';

import './App.css';


function App() {

  return (
    <div className="App-header">
      <Counter />
      <div className="buttons">
        <ButtonAdd />
        <ButtonRemove />
        <ButtonMultiplicar />
      </div>
    </div>
  );
}

export default App;
