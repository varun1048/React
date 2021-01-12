import React from 'react';
import ReactDOM from 'react-dom';

import MembersRouters from './MembersRouters';
import Admin from './Admin.jsx';

ReactDOM.render(
  <React.StrictMode>
    <MembersRouters />    
    <Admin />
  </React.StrictMode>,
  document.getElementById('root')
);
