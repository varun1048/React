import React,{Component} from 'react'
import Chiled from './child'
class StateTest extends Component {
    constructor(){
        super();
        this.state = {
            str:"manadu",
        }
    }
    
    reset () {
        console.log("v")
       this.setState({str:"sibu"})

    }
    render() { 
        return ( 
            <React.Fragment>
                hi{false && "varunsumma"}
                <h1>{
                    }
                    {this.state.str}
                 <Chiled send={"varun"}/>
                </h1>
                <button onClick={()=>this.reset()}>
                    reset
                </button>
            </React.Fragment>
        );
    }
}
 
export default StateTest;