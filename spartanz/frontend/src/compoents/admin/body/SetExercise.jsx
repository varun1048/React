// SetExercise
import { useState } from "react";
import AdminLinks from "./adminLinks";

export default function SetExercise(){
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

    return    <div className="container">
     <div  className="row">
        <AdminLinks />
        <div className="col-lg-9">
        
        SetExercise
        
        <form >
    
        <div class="form-group">
            <label for="usr">Full Name</label>
            <span>

            <input type="text"  className="form-control" onChange={handleChange}
            placeholder="Enter Name" name="name"/>
            </span>


        </div>

        
    
    
            <button type="submit" className="btn btn-primary"> submit </button>
        </form>
        </div>
    </div>
</div>
}