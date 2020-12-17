import React ,{ useState } from "react"
import axios from "axios"
import {Link} from 'react-router-dom'
import "./style/navbar.css"


export default function Create(){
    
    const [input,setInput] = useState({ 
        title:" ",
        content:" "
    })
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
        console.log(input)

        const newNote = {
            title:input.title,
            content:input.content
        }

        axios.post("http://localhost:3001/create",newNote)
    }
    return (
        <div className="container">
            <h3 className="m-1 text-success">Create note</h3>
            <form>

            <div class="form-group">

                <input name="title"  onChange={handleChange} placeholder="Enter title" 
                autoCapitalize="off" className="form-control"     type="text"/>        
            
            </div>

                <div class="form-group">

                    <textarea  name="content" onChange={handleChange}  placeholder="Enter contnet"
                    className="form-control" autoCapitalize="off" rows="5">
                    </textarea>

                </div>                  
            </form>
            <button type="submit" onClick={handleClick} class="btn btn-primary">
                <Link  className="link2 "  to='/notes'>
                    Add note
                </Link>
            </button>
        </div>
    )
}