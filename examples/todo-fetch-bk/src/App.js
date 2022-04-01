import logo from './logo.svg';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Login from './components/Login';

function App() {
  return (
    <div className="App-header">
      <div>
        <Login />
      </div>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
