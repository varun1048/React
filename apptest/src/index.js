import reactdom from 'react-dom'
// import react from 'react'
// import Test from './Test'

// let element = react.createElement('h2',{},'hi from varun')
// const myelement = (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// );
function Fun (){
  return <h1>This is from fun component</h1>
}
reactdom.render(<Fun />,document.getElementById('root'))