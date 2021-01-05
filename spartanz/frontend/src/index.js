import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import Admin from './Admin.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />    
    <Admin />
  </React.StrictMode>,
  document.getElementById('root')
);
