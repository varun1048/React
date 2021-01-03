import React ,{ useState } from "react"
import axios from "axios"
import {useHistory} from 'react-router-dom'

export default function Join(){
    const history = useHistory()

    let st={
        "width":"400px"
    }
        let [input,setInput] = useState(0)

        
    function handleChange(event){
        const {name,value} = event.target 
        setInput(prevInput =>{
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        if(input.name !== 0 && input.number !== 0  ){
            axios.post("http://localhost:5000/members/save",
            {
                "info":input,
            }).then(()=>{
                console.log("done")
                history.push('/admin')
                
            })
        }
    }


    return <React.Fragment> <br/>
        <div   className="d-flex justify-content-center "> 
            <div className="card bg-light" style={st}>
                <div class="card-body">

                    <form>
                        
                        <div class="form-group">
                            <label for="usr">Full Name</label>
                            <input type="text"  className="form-control" onChange={handleChange}
                            placeholder="Enter Name" name="name"/>
                        </div>
                        <div class="form-group">

                            <label for="usr">Mobile Number</label>
                            <input type="number"  className="form-control" onChange={handleChange}
                            placeholder="Enter number" name="number"/>
                        </div>
                        

                            <button type="submit" class="btn btn-dark" onClick={handleClick}  >Submit</button>
                    </form>

                </div>
            </div>
        </div>
    </React.Fragment>
}