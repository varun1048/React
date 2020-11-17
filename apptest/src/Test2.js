import React from 'react'
import cons ,{log} from './Fun'

class Test2 extends React.Component{
    send = ()=>{
        alert("using this operaters")
        log("varun from ")
    }
    render(){
        return <button onClick={this.send}>this</button>
    }
}

export default Test2