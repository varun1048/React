import React,{Component} from 'react'

class Form extends Component {
    constructor(datas){
        super(datas)
        
        let inputRef = React.createRef()
        this.state={
            name:'',
            commands:'',
            topic:''
        }
    }
Cname = event =>{
    this.setState({
        name: event.target.value
    })
}
Cconmmnes = event =>{
    this.setState({
        commands:event.target.value
    })    
}
Ctopic = event =>{
    this.setState({
        topic:event.target.value
    })    
}
    render() { 
        let {name,commands} = this.state
        return (<div>
            <form onSubmit={(event)=>{
                console.log(this.state)
                    event.preventDefault()
                }
            }>
                <label>Usernmae :-</label>
                    <input type="text"
                        value={name}
                        onChange={this.Cname}
                        ref={this.inputRef}
                    /> <br/>
                Textarea: <textarea 
                    value={commands}
                    onChange={this.Cconmmnes}                    
                    /> <br/>
                select <select 
                        value={commands}
                        onChange={this.Ctopic}                    
                    > 
                    <option value="React">React</option>
                    <option value="js">js</option>
                    <option value="css">css</option>
                </select>
                <button type='submit'>Submit</button>
            </form>
        </div> );
    }
}
 
export default Form;