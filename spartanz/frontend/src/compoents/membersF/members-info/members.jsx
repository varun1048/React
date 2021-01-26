import React, { useState } from 'react'                        
import {useHistory} from 'react-router-dom'
import axios from "axios"

export default function Members() {
    const history = useHistory()
    let st={
        "width":"400px"
    }

    const [input,setInput] = useState(0)

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
        
        axios.post("http://localhost:5000/members/profile",{"number":input.userNumber})
        .then((datas)=>{

            if(datas.data.name !== undefined ){
                history.push(`/member/${ datas.data.number}`)
                
            }else{
                alert("unkwon member")
            }

        })   
    }


    return    <React.StrictMode>
        <br/>
        <div   className="d-flex justify-content-center"> 
            <div className="card" style={st}>
                <div className="card-body bg-light">

                    <form>
                        
                        <div className="form-group ">
                        
                            <label htmlFor="usr">Number</label>
                            <input type="number" className="form-control" onChange={handleChange}
                            placeholder="Enter your mobile number" name="userNumber"/>
                        
                        </div>
                            <button type="submit" className="btn btn-primary" onClick={handleClick}  >Submit</button>
                    </form>

                </div>
            </div>
        </div>

    </React.StrictMode>
}