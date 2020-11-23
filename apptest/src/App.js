// import logo from './logo.svg';
// import Admin from './Admin.js'
// import Users from './Uers.js'
// import {Route, BrowserRouter,Link} from 'react-router-dom'
// import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Test from './Tutorial/stateTest'
export default function App (){
  return (
  <React.Fragment>
    <Test />
  </React.Fragment>

    // <div className="App">
    //   <BrowserRouter>
    //     <Route exact path="/" component={Admin}  />
    //     <Route exact path="/u" component={Users}  />
    //     <Link to='./Test'>Test2</Link>
    //   </BrowserRouter>
    // </div>
  );
}

//  App;


// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload. 
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>