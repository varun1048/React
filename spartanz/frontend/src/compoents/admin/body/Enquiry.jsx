import axios from "axios"
import { useEffect, useState } from "react";


import AdminLinks from "./adminLinks";

export default function Enquiry(){
    let     [info,setInfo]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/Enquiry")
        .then(datas => {
            setInfo(datas.data)
        })
        .catch(err => console.log(err) )
    })
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

    return    <div className="container-fluid ">
     <div  className="row">
        <AdminLinks />
            <div className="col-lg-9">

            <table className="table table-bordered text-center">
            <thead>
                <tr className="bg-light">
                    <th>Name</th>
                    <th>Number</th>
                    <th>Gmail</th>
                </tr>
            </thead>
            <tbody>
                {info.map(data => <tr key={data._id}>
                    <td> {data.name} </td>
                    <td> {data.number} </td>
                    <td> {data.gmail} </td>
                </tr> )}
            </tbody>

            </table>
        </div>
    </div>
</div>
}