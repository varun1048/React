import axios from "axios"
import React,{ useEffect ,useState } from "react"

export default function LiveMembers(){
    let [members,setMembers] = useState([])

    useEffect(()=>{
        axios.post("http://localhost:5000/admin/getAll")
        .then(datas =>{
            setMembers(datas.data)
        })
    })
    console.log(members)
    
    return  <div className="container">
        
        <h1> <span class="badge badge-secondary">Members</span></h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {/* {members.map(element => <tr>
                    <td key={element} > {element} </td>
                </tr> )} */}
            </tbody>
        </table>
     </div>
}