import React ,{Component} from 'react';
import Counter from './counter.jsx'
class Countres extends Component {
    state = { 
        counters:[
            {id:1, value:9},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
        ]  
     }
    
    handleDelete = counterID =>{
        const counters = this.state.counters.filter(inner => inner.id !== counterID)
        this.setState({counters})
        
        console.log("delete counter id:",counterID)

    }
    
    render() { 
        return (<div>
            {this.state.counters.map( 
                counters => <Counter 
                        key={counters.id} 
                        on ={this.handleDelete}
                        
                        counter={counters}
                        // id={counters.id}
                        // value={counters.value}
                     /> )}
        </div>  );
    }
}
 
export default Countres;