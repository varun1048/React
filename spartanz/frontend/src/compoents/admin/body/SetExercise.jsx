import axios from "axios"
import { useState } from "react";
import {Link, useParams } from 'react-router-dom'

import AdminLinks from "./adminLinks";

export default function SetExercise(){
    let [days,setDays] = useState([])

    let [out,setout] = useState([])
    let  [Exercise ,setExercise] = useState('')

    let [edit ,setEdit] = useState({
        on : false,
        index:"",
    })

    let [card ,setCard ]= useState('')
    let [numberofDays ,setNumberofDays ]= useState('')

    function handleAdd (e){
        e.preventDefault()
        let tem = out

        if(edit.on){
            tem[edit.index]=Exercise
            setEdit({
                on:false,   
                index:""
            })
            console.log("edit")
        }
        else{
            tem.push(Exercise)
        }
        setout(tem)
        setExercise('')
    }
    
    let st={"width":"400px"}


    function handleDelete(inner){
        setout(out.filter( (e ,i)=> i !==inner ))
    }
    function handleEdit(inner){
        setEdit({
            on:true,
            index:inner
        })
       let tep = out
       tep[inner] = <h3 className="text-danger"> !</h3>
        setout(tep)
    }
    let ply =   (edit.on)? " Reenter for exercise number : "+edit.index : "Enter  Exercise Number : "+ out.length
    function handleDaySubmint(){
        days.push(out)
        setDays(days)
        setout([])
    }

    const  Params = useParams()
console.log()
    function TotalSubbmint(){
        let obj = {
            card,
            numberofDays,
            days,
            id: Params.id
        }

        axios.post("http://localhost:5000/admin/SetExerciseDB",obj)
        .then(console.log("Ecercise updated"))
        .catch(err => console.log("send Exercises to db --"+ err))
    }

    return    <div className="container-fluid" >

       <div  className="row ">
            <AdminLinks />
       
            <div className="col-lg m-2">
                <h3> Set Exercise </h3>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Card Number</span>
                    </div>
                    <input type="number" className="form-control" onChange={ e => setCard(e.target.value)}
                     placeholder="Enter  Number" aria-label="Username" aria-describedby="basic-addon1" />
                    
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Days to do</span>
                    </div>
                    <input type="number" className="form-control" onChange={ e => setNumberofDays(e.target.value)}
                     placeholder="Enter Number " aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3 ">

                    <input type="text" className="form-control m-1" onChange={ e => setExercise(e.target.value)}  value={Exercise}
                     aria-label="Default" aria-describedby="inputGroup-sizing-default" style={st}  placeholder={ply} />

                        <button type="button" className="btn btn-primary m-1" onClick={handleAdd}>add    </button>

                        <button type="submit" className="btn btn-success m-1 active " onClick={handleDaySubmint} >submit day 

                        <span className="badge bg-light text-dark m-1">{  days.length+1}</span>     </button>

                        <button type="button" className="btn btn-secondary m-1"  onClick={TotalSubbmint}>set Exercise</button>
                        <Link to={`/admin/bio/${Params.id}`} 
                            className="btn btn-success m-1" >
                                Bio
                        </Link> 
                </div>
            </div>
            <div className="col-lg m-2">
                <h3>Exercise <span className="badge bg-light text-dark m-1">{" day  "+  (1+days.length)}</span></h3>
                
                <ul className="list-group">
                    {out.map( (ex ,i) => <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="badge badge-light ">{i} </span>
                        { ex} 
                        <div>

                            <button className="btn btn-warning  btn-sm m-1" onClick={() => handleEdit(i)} >     edit </button> 
                            <button className="btn btn-danger   btn-sm m-1" onClick={() => handleDelete(i)}>    delete</button> 

                        </div>
                        </li> 
                    )}
                </ul> 
            </div>

       </div>

    </div>
}





















