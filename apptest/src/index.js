import reactdom from 'react-dom'
import React from 'react'
import Test from './Test'
import Test2 from './Test2'
import Test3 from './Test3'

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
class Output extends React.Component{
    render(){
        return(
            <div>
                <Test3 />
                <Test2 />
                <Test />
            </div>
        )
    }
}
reactdom.render(<Output />,document.getElementById('root'))