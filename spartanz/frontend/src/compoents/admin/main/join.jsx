import React ,{ useState } from "react"
import axios from "axios"
import {useHistory} from 'react-router-dom'

export default function Join(){
    const history = useHistory()
    // let L = inner =>console.log(inner)
 
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
        // L(input)

        
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
        <div   className="container p-3 bg-light"> 
            
            <form className="form-horizontal  ">
                
                <div className="row">


                    <div className="form-group col-sm-6">

                        <div className="input-group">
                            <span className="input-group-addon m-1">Full Name</span>
                            <input id="email" type="text" className="form-control " name="Name" onChange={handleChange}
                            placeholder="Enter Name "/>
                        </div>

                    </div>


                    <div className="form-group col-4">
                        <div className="input-group">
                            <span className="input-group-addon m-1">Mobile Number</span>
                            <input id="email" type="text" className="form-control " maxLength={10}
                            name="number" onChange={handleChange}
                            placeholder="Enter Mobile Number "/>
                        </div>
                    </div>

                </div>

            <div className="row">
                
                <div className="form-group col-sm-6" >
                    <input type="radio" name="gender"  value={"Male"} onChange={handleChange} className="m-2"  />Male
                    <input type="radio" name="gender" value={"Female"} onChange={handleChange} className="m-2"  />Female
                </div>

                <div className="form-group col-sm-3">
                    <div className="input-group">

                            <span className="input-group-addon m-1">Age</span>
                            <input id="email" type="text" className="form-control"  onChange={handleChange}
                            name="age" placeholder="Enter age"/>
                    </div>
                </div>

            </div>


            <div className="row">

                <div className="form-group col-sm-6">

                    
                    <div className="input-group">

                        <span className="input-group-addon m-1">Gmail </span>
                        <input id="email" type="mail" className="form-control" name="gmail" onChange={handleChange}
                         placeholder="Enter Gmail"/>
                    </div>
                </div>

                <div className="form-group ">
                    <div className="form-check ">

                        <span className="input-group-addon ">In Specific:</span>
                        <select className="form-select " ari    a-label="Default select example" name="specific" onChange={handleChange}>
                            <option value="Weight Loss"> Weight Loss       </option>
                            <option value="Weight Gain"> Weight Gain       </option>
                            <option value="Overall Toning"> Overall Toning    </option>
                            <option value="Muscle Builind"> Muscle Builind    </option>                        
                        </select>

                    </div>
                </div>

            </div>

            <div className="row">

            <div className="input-group col-sm-4">

            <span className="input-group-addon m-1">Program type</span>
                <input id="email" type="text" className="form-control"  onChange={handleChange}
                name="programType" placeholder="Enter program type"/>
            </div>

                <div className="input-group col-sm-3">
                    <span className="input-group-addon  m-1 ">Package type  </span>
                
                    <select className="form-select " aria-label="Default select example"
                     name="package" onChange={handleChange}>
                            <option ></option>
                            <option value="2">Monthly</option>
                            <option value="4">Quartely</option>
                            <option value="7">Half yearly</option>
                            <option value="13">	Annual</option>
                    </select>
                </div>

                    <div className="col-sm-4">                   
                        
                        <div className="input-group">
                            <span className="input-group-addon m-2">Image Url</span>
                            <input id="email" type="text" className="form-control " name="imgUrl" onChange={handleChange}
                            placeholder="Enter image URL"/>
                        </div>

                    </div>
            </div>



                <div className="row  m-5">
                    <div className="col-sm-6">
                        <button type="submit" className="btn btn-dark" onClick={handleClick}  >Add member</button>
                    </div>
                </div>
 
            </form>

        </div>
        
    </React.Fragment>
}