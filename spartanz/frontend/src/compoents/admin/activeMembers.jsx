import axios from "axios"
import React,{ useEffect ,useState } from "react"


export default function ActiveMembers(){
    let [members,setMembers] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/admin/getAll")
        .then(datas =>setMembers(datas.data) )
    })

    return  <div className="container">
        
        <h1> <span class="badge badge-secondary">Members</span></h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                </tr>
            </thead>
            <tbody>
                {members.map(element => <tr>
                    <td> {element.name} </td>
                    <td> {element.number} </td>
                </tr> )}
            </tbody>
        </table>
     </div>
}