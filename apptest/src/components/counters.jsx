import React ,{Component} from 'react';
import Counter from './counter.jsx'

class Countres extends Component {
    style={
        textAlign :"center",
        fontSize :40,
        fontWeight :"bold"
    }
    
    render() { 
        const {doDelete,
                doIncrement,
                doReset,
                counters
            } = this.props
        return (<div>

            <div style={this.style} 
            className="badge badge-pill  badge-warning ">Prodects</div>

            <button onClick={doReset} 
                className="btn btn-primary m-1 ">Reset</button><br/>
            {counters.map( 
                counters => <Counter 
                        key={counters.id} 
                        on ={doDelete}
                        counter={counters}
                        onIncrement={doIncrement}
                        // id={counters.id}
                        // value={counters.value}
                    /> )}
        </div>);
    }
}
 
export default Countres;