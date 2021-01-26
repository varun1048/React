import axios from "axios"
import React, { useState } from 'react'                        


export default function ContactUs(){
    const [input,setInput] = useState(0)

    let st={
        "width":"400px"
    }

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
        
        axios.post("http://localhost:5000/Enquiry",input)
        .then((datas)=>{
            console.log(datas)
       }) 
        
    }

    return <div className="d-flex justify-content-center">
        <div className="card" style={st}>
            <div className="card-body bg-danger">
                <div className="badge ">
                    <h2>  Contact us & Enquiry </h2>
                </div>

                <form>
                    
                    <div className="form-group ">
                        
                        <label htmlFor="usr">Name</label>
                        <input type="text" className="form-control" onChange={handleChange}
                        placeholder="Enter your full nmae" name="name"/>                    

                        <label htmlFor="usr">mobile  Number</label>
                        <input type="number" className="form-control" onChange={handleChange}
                        placeholder="Enter your mobile number" name="number"/>
 
                        <label htmlFor="usr">Gmail </label>
                        <input type="email" className="form-control" onChange={handleChange}
                        placeholder="Enter your gmail id" name="gmail"/>
 
                    
                    </div>
                        <button type="submit" className="btn btn-primary" onClick={handleClick}  >Submit</button>
                </form>
            </div>    
        </div>
    </div>
}