import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from './components/ThemeContext';
import Count from './components/Counter';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import ToggleTheme from './components/ToggleTheme';

function App() {
  return (
    <div className="App-header">
      <ThemeProvider>
        <ToggleTheme />
        <Count />
        <br />
        <Form1 />
        <br />
        <Form2 />
      </ThemeProvider>


    </div>

  );
}

export default App;
