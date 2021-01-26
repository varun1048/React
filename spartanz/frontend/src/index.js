import React from 'react';
import ReactDOM from 'react-dom';

import MembersRouters from './MembersRouters';
import Admin from './Admin.jsx';

ReactDOM.render(
  <React.StrictMode >
    <MembersRouters  className="bg-dark"  />    
    <Admin />
  </React.StrictMode>,
  document.getElementById('root')
);
