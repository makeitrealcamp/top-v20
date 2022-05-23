import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
// router
// auth0
// firebase
// theme (material-ui)

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="khriztianmoreno.auth0.com"
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
