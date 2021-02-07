import axios from "axios"
import { useState } from "react";
import AdminLinks from "./adminLinks";
import {useParams } from 'react-router-dom'

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
            console.log("on of")
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
       tep[inner] = <span className="text-danger">!</span>
        setout(tep)
    }
    let ply =   (edit.on)? " Reenter for exercise number : "+edit.index : "Enter  Exercise Number : "+ out.length
    console.log(days)
    function handleDaySubmint(){
        // let tep = days
        days.push(out)
        setDays(days)
        setout([])
    }

    const  Params = useParams()
console.log()
    function totalSubbmint(){
        let obj = {
            card,
            numberofDays,
            days,
            id: Params.id

        }
            axios.post("http://localhost:5000/admin/SetExerciseDB",obj)
            .then(console.log("updated "))
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

                        <button type="button" className="btn btn-primary m-1" onClick={totalSubbmint}> set Exercise    </button>

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






















// let L = (inner)=>console.log(inner)
// export default function SetExercise(){

//     // let     [info,setInfo]=useState(0)
//     let     [lastAssessment,setLastAssessment]=useState(0)

//     const  Params = useParams()
//     const history = useHistory()

// console.log(Params)

//     let [input,setInput] = useState({
//         Exercise:"",
//         Seta:"",
//         Reps:"",
//         Weight:"",
//         card:"",
//         days:""
//     })

//     let [Exercises, setExercises] = useState([{
//         Exercise:"warm - up",
//         Sets:"1",
//         Reps:"-",
//         Weight:"-",
//     }])
// //suma
//  useEffect(()=>{
//      console.log(input.card)
//     axios.post("http://localhost:5000/admin/SetExerciseInfo",{"id": Params.id})
//     .then(datas => {
//         // setInfo(datas.data)
//         setLastAssessment(datas.data.lastAssessment)
//     } )
//     .catch(err => console.log(err) )
//  })


//     function handleChange(event){
//         // event.preventDefault();   
//         const {name,value} = event.target 
//         setInput(prevInput =>{
//             return {
//                 ...prevInput,
//                 [name]:value
//             }
//         })
//     }

//     function handleAdd(){
//         let Hub = Exercises
//         Hub.push(input)
//         setExercises(Hub)
//         setInput(0)
//     }
//     function handleClick(){
        
//         if(Exercises.length !== 0 && Exercises.length !== 1   ){
            
//             L("varim")
//             axios.post("http://localhost:5000/admin/SetExerciseDB",
//                 { gymWorkout: Exercises,
//                   id: Params.id,
//                   card :input.card,
//                   days : input.days
//             })
//             .then(history.push("/admin/memberInfo"))
//             .catch(err => console.log("send Exercises to db --"+ err))
            
//         }
//         else{
//             alert("Enter all values")
//         }
//     }
//     let st={"width":"100px"}
//     let st2={"width":"15px"}
//     return    <div className="container-fluid">
//      <div  className="row">
//         <AdminLinks />

//         <div className="col-lg-9 ">
//             <br/>
//             <div className="d-flex justify-content-between">
//                 <h2>
//                     Set Exercise 
//                 </h2>
//                 <button className="btn btn-info " data-toggle="collapse" data-target="#demo">last Assessment</button>
//             </div>
//             <br/>
//             <div id="demo" className="collapse">
                       
//                 <ul className="list-group">
                
//                     <li className="list-group-item d-flex justify-content-between align-items-center">
//                         PushUp
//                         <span className="badge badge-primary badge-pill">{lastAssessment.pushUp}</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between align-items-center">
//                         CurlUps
//                         <span className="badge badge-primary badge-pill">{lastAssessment.curlUps}</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between align-items-center">
//                         Squats
//                         <span className="badge badge-primary badge-pill">{lastAssessment.squats}</span>
//                     </li>
//                 </ul>                
//             </div>

               
//             <table className="table table-dark">
//                 <thead>
//                     <tr>
//                         <th>Exercise</th>
//                         <th>Sets</th>
//                         <th>Reps</th>
//                         <th>Weight</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     <tr>
                       
//                         <td>
//                             <div className ="form-group">
//                                 <input type="text"  className="form-control" onChange={handleChange}
//                                 placeholder="Exercise Name" name="Exercise"/>
//                             </div>
//                         </td>
                      
//                         <td style={st}>
//                             <div className ="form-group"> 
//                                 <input type="number"  className="form-control" onChange={handleChange}
//                                 placeholder="-" name="Sets"/>
//                             </div>
//                         </td>

//                         <td style={st}>
//                             <div className ="form-group"> 
//                                 <input type="number"  className="form-control" onChange={handleChange}
//                                 placeholder="-" name="Reps"/>
//                             </div>
//                         </td>
                        
//                         <td style={st}>
//                             <div className ="form-group" > 
//                                 <input type="number"  className="form-control" onChange={handleChange}
//                                 placeholder="Kg"  name="Weight"/>
//                             </div>
//                         </td>
                    
//                         <td style={st}>
//                             <button type="submit" onClick={handleAdd}  className="btn btn-danger"> Add </button>
//                         </td>

//                     </tr> 
                
//                     <tr>
//                         <td>
//                             <div className="input-group">
//                             <span className="input-group-addon m-2">Card Number</span>
//                             <input  type="text" className="form-control " name="card" onChange={handleChange} 
//                             placeholder="Enter Card number" style={st2} />
//                         </div>
//                         </td>
//                         <td>
//                         <div className="input-group">
//                             <span className="input-group-addon m-2">Number days</span>
//                             <input  type="text" className="form-control " name="days" onChange={handleChange} 
//                             placeholder="Enter days" style={st2} />
//                         </div>
//                         </td>
//                         <td>
//                             <button type="submit" onClick={handleClick}  className="btn btn-success"> Submit </button>
//                         </td>          
//                     </tr>   
//                 </tbody>
//             </table>

//         <dir className="container">
//         <table className="table bg-light">
//                 <thead>
//                     <tr>
//                         <th>Exercise</th>
//                         <th>Sets</th>
//                         <th>Reps</th>
//                         <th>Weight</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                 {  Exercises.map( (element ,i) =>{
//                         return <tr key={  ( i).toString() } >   
//                             <th >{element.Exercise}</th>
//                             <th >{element.Sets}</th>
//                             <th >{element.Reps}</th>
//                             <th >{element.Weight} Kg  </th>
//                         </tr>
//                     })}
//                 </tbody>
//         </table>

            
//         </dir>

//         </div>
//     </div>
// </div>
// }