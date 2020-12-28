import React from 'react'

export default class Clock extends React.Component {
    constructor(props){
        super(props)
        console.log("constructor")

        this.state = {p : new Date()}
        console.log(this.state.p)
    }

    componentDidMount(){
        console.log("componentDidMount")
        this.timerID = setInterval(()=>this.tick(),1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            p: new Date()
        });

    }
    render(){
        return <React.Fragment>
            {this.state.p.toLocaleTimeString()}
        </React.Fragment>
    }
}   