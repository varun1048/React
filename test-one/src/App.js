// import react from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'

import Navbar from "./compoents/navbar.jsx"

import Home from './compoents/Home'
import Notes from './compoents/Notes'
import CreateNotes from './compoents/Create.jsx'


function App() {
  return (
    <Router>
  
      <Nav  bar />
        <Route path="/" exact>
          {/* hoeme page */}
          <Home />   
        </Route>

        <Route path="/notes" >
          {/* notes */}
          <Notes />
        </Route>
        <Route path="/create" >
          {/* create notes */}
          <CreateNotes />
        </Route>

    </Router>
  );
}

export default App;
