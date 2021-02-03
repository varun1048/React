import axios from "axios"
import { useEffect, useState } from "react";

import AdminLinks from "./adminLinks";

export default function ExpredPackage(){
    let     [info,setInfo]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/admin/ExpredPackage")
        .then(datas => {
            setInfo(datas.data)
        })
        .catch(err => console.log(err) )
    })



    return    <div className="container-fluid">
     <div  className="row">
        <AdminLinks />
        <div className="col-lg-9">
            <div className="container m-1">
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Expired </th>
                        <th>Package type</th>
                        <th>Number </th>
                    </tr>
                </thead>
                <tbody>
                    {info.map(data => <tr key={data._id}>
                        <td> {data.name} </td>
                        <td> {String(data.expiry).slice(0,10)} </td>
                        <td> {data.package} </td>
                        <td> {data.number} </td>
                    </tr> )}
                </tbody>

                </table>
            </div>
        </div>
    </div>
</div>
}