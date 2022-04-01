
//components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from './components/ToDoForm';

import './App.css';

function App() {
  return (
    <div className="App-header">
      <Header />
      <ToDoList />
      <ToDoForm />
    </div>
  );
}

export default App;
