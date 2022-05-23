import { useAuth0 } from "@auth0/auth0-react";

import logo from './logo.svg';
import './App.css';

import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  const { isAuthenticated, user, isLoading } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {
          isAuthenticated
            ? (
              <>
                <p>{user.name} are logged in!</p>
                <img src={user.picture} alt={user.name}  />
                <br />
                <LogoutButton />
              </>
            )

            : <LoginButton />
        }

      </header>
    </div>
  );
}

export default App;
