import React from 'react'

class Test2 extends React.Component{
    send = ()=>{
        alert("using this operaters")
    }
    render(){
        return <button onClick={this.send}>this</button>
    }
}

export default Test2