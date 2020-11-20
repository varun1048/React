import reactdom from 'react-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
// import Counters from './components/counters.jsx'
import App from './AppMain'   

// import App from './App'
// import {BrowserRouter} from 'react-router-dom'
// import Test2 from './Test2'
// import Test3 from './Test3'

reactdom.render(<App />,document.getElementById('root'))
    // <BrowserRouter>
    // </BrowserRouter>

// class Output extends React.Component{
//     render(){
//         return(
//             <div>
//                 <Admin />
//                 <Users />
//             </div>
//         )
//     }
// }



// let element = react.createElement('h2',{},'hi from varun')
// const myelement = (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// );
// function Fun (){
//   return <h1>This is from fun component</h1>
// }
