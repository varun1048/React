import axios from "axios"
import { useEffect, useState } from "react";


import AdminLinks from "./adminLinks";

export default function Enquiry(){
// let L = (inner)=>console.log(inner)

    let     [info,setInfo]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/Enquiry")
        .then(datas => {
            setInfo(datas.data)
        })
        .catch(err => console.log(err) )
    })
    return    <div className="container">
     <div  className="row">
        <AdminLinks />
        <div className="col-lg-9">
            <table className="table">
            <thead>
                <tr>
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