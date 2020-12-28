import React,{Component} from 'react';

export default class Forms extends Component {
    constructor(props){
        super(props)
        this.state = { 
            value2:"two",
            value:"Enter a value"
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChange = this.handleChange2.bind(this)
    }

    handleSubmit(event){
        alert(this.state.value+"\n"+this.state.value2)
        event.preventDefault();
    }

    handleChange(event){
        this.setState({
            value:event.target.value,
        })
    }
    handleChange2(event){
        this.setState({value2: event.target.value2})
    }
    render() { 
        return ( <div>
            <form onSubmit={this.handleSubmit} >

                <select value={this.state.value2} 
                    onChange={this.handleChange2}>

                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                </select>
                
                <br/>
                <br/>
                <br/>
                
                <textarea 
                    onChange={this.handleChange}
                     name={this.state.value}
                    cols="30"
                />
                
                <input type="submit" />
            </form>
        </div> );
    }
}
 
