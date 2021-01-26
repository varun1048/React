
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

    return <div className="d-flex justify-content-center ">

        <div className="card m-2 text-primary bg" style={st}>
            <div className="card-body ContactUs">
                    <h2>  Contact us & Enquiry </h2>

                <form>
                    
                    <div className="form-group  ">
                        
                        <label htmlFor="usr ">Name</label>
                        <input type="text" className="form-control" onChange={handleChange}
                        placeholder="Enter your full nmae" name="name"/>                    
                        <br/>
                        <label htmlFor="usr">Mobile  Number</label>
                        <input type="number " className="form-control" onChange={handleChange}
                        placeholder="Enter your mobile number" name="number"/>
                        <br/>
                        <label htmlFor="usr">Gmail </label>
                        <input type="email" className="form-control" onChange={handleChange}
                        placeholder="Enter your gmail id" name="gmail"/>
 
                    
                    </div>
                        {/* <button type="submit" className="btn btn-primary" onClick={handleClick}  >Submit</button> */}
                        <button type="button" class="btn btn-primary" onClick={handleClick}  data-toggle="modal" data-target="#myModal">
                        Send
                    </button>
                </form>
            </div>    
        </div>



        <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">
                
                    <div class="modal-header">
                        <h4 class="modal-title">SPARTANZ Fitness</h4>
                        {/* <button type="button" class="close" data-dismiss="modal">&times;</button> */}
                    </div>
                    
                    <div class="modal-body">
                    <h3>Thank you {input.name}</h3> 
                     our admin call you soon..   
                    </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>

}