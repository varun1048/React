import { useEffect, useState } from "react";
import axios from "axios"
import {useParams} from 'react-router-dom'

import AdminLinks from "./adminLinks";

export default function Bio(){
    const  Params = useParams()
    let    [info,setInfo]=useState(0)
    useEffect(()=>{
        axios.post("http://localhost:5000/admin/bio",{"id":Params.id})
        .then(datas => setInfo(datas.data) )
        .catch(err => console.log(err) )
    })
    return    <div className="container-fluid">
     <div  className="row">
        <AdminLinks />
        <div className="col-lg-8">
            Bio
            Name: {info.name} <br/>
            Number {info.number}
        </div>
    </div>
</div>
}