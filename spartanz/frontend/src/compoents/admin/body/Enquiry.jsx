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
    function updatePackage(){
        console.log(input)
    }

    return    <div className="container-fluid ">
     <div  className="row">
        <AdminLinks />
            <div className="col-lg-9">
            <div className="container">

                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
                </button>

                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Update package </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body container">
                         <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" value="2"  onChange={handleChange} name="package" />Monthly
                            </label>
                            </div>
                            <div className="form-check-inline">
                                <label classname="form-check-label">
                                    <input type="radio" className="form-check-input" value="4" onChange={handleChange} name="package" />Quartely
                                </label>
                            </div>
                            <div className="form-check-inline">
                                <label classname="form-check-label">
                                    <input type="radio" className="form-check-input" value="7" onChange={handleChange} name="package" />Half yearly
                                </label>
                            </div>
                            <div className="form-check-inline">
                                <label classname="form-check-label">
                                    <input type="radio" className="form-check-input" value="13" onChange={handleChange} name="package" />Annual
                                </label>
                            </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={updatePackage}  data-dismiss="modal" className="btn btn-primary">Update</button>
                    </div>
                    </div>
                </div>
                </div>

            </div>

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