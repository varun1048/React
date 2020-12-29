import React, { useState } from 'react'

import axios from "axios"
export default function Members(params) {
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
            console.log(datas.data.name)
        })
        .catch((err)=>{
            console.log(err)

        })
        
    }


    return    <React.StrictMode>
        <br/>
        <div   className="d-flex justify-content-center"> 
            <div className="card" style={st}>
                <div class="card-body">

                    <form>
                        
                        <div class="form-group">
                        
                            <label for="usr">Number</label>
                            <input type="number" className="form-control" onChange={handleChange}
                            placeholder="Enter your mobile number" name="userNumber"/>
                        
                        </div>
                        
                        <button type="submit" onClick={handleClick} class="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        </div>

    </React.StrictMode>
}