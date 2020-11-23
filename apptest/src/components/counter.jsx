import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default class  Counter extends Component {
    

        // constructor(){
            //     super()
            //     this.handleIncrement = this.handleIncrement.bind(this)
            // }
            
            // renderTags(){
                //     if(this.state.tags.length === 0) return <p>Ther aer no tags</p>
                //     return this.state.tags.map(tag=><li key={tag}>{tag}</li>)
                // }
                
    // state = {
    //     value:this.props.counter.value,
    //     // tags : ['tag1','tag2','tag3']
    //     //'tag1','tag2','tag3'
    // }

    // handleIncrement = () =>{
    //     // console.log('Incremented',product)
    //     this.setState({value:this.state.value +1})
    // }
    // helpIncrement = ()=>{
    //     this.handleIncrement()
    // }

    style={
        textAlign :" center",
        fontSize :20,
        fontWeight :"bold"
    }

    render() {
        // const {onIncrement,} = this.props
        return (<div style={this.style}>

            <samp className={this.getBadgeClass()}> {this.fromatcount()}</samp>
            <button onClick={()=>this.props.onIncrement(this.props.counter)} 
                className='btn btn-secondary m-2'>{this.props.counter.fruits} </button> 
            <button onClick={ () => this.props.on(this.props.counter.id) } 
                className='btn btn-danger m-2'>
                delete</button> <br/>


            {/* <ul>
                {this.state.tags.length === 0 && "please Enter a values"}
                {this.renderTags()}
            </ul> */}
        </div >);
    }

    fromatcount = ()=>{
        const {value} = this.props.counter
        return value === 0 ? "zero": value
     }

    getBadgeClass() {
        let fun = "badge m-2 badge-";
        fun += (this.props.counter.value === 0) ? "warning" : "primary";
        return fun;
    }
} 
