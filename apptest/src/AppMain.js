import React  from 'react'
import Navbar from './components/navbar'
import Counters from './components/counters.jsx'


class App extends React.Component {
    state = { 
        counters:[
            {id:1, value:0 ,fruits:'banana'},
            {id:2, value:0 ,fruits:'drawing'},
            {id:3, value:0 ,fruits:'orange'},
            {id:4, value:0 ,fruits:'mango'},
            {id:5, value:0 ,fruits:'banana'},
        ]  
    }
    handleReset = ()=>{
        let counters = this.state.counters.map( c =>{
            c.value = 0
            return c
        })

        this.setState({counters})
    }    
    handleDelete = counterID =>{
        const counters = this.state.counters.filter(inner => inner.id !== counterID)
        this.setState({counters})
        
        console.log("delete counter id:",counterID)

    }
    handleIncrement = counter =>{
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
            counters[index]={...counter}
            counters[index].value++
        console.log(counter)
        this.setState({counters})
    }
    handleAdding = counter =>{
        
    }


    render() { 
        return (
            <React.Fragment>
            <Navbar totelcounter={
                this.state.counters.filter(s => s.value >0).length
            }/>
            <main className='container'>
              <Counters 
                counters={this.state.counters}
                doReset={this.handleReset}
                doIncrement={this.handleIncrement}
                doDelete={this.handleDelete}
                doAdding={this.handleAdding}
              />
            </main>
          </React.Fragment>
        );
    }
}
 
export default App;