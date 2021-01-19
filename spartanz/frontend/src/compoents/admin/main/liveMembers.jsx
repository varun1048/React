import axios from "axios"
import React,{ useEffect ,useState } from "react"

export default function LiveMembers(){
    let [members,setMembers] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/members/live")
        .then(datas =>{
            setMembers(datas.data)
        })
    })
    
    return  <div className="container">
        
        <h1> <span className="badge badge-secondary">Members</span></h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {members.map( (element ,i) => <tr>
                    <td key={ ( i  ).toString() } > {element} </td>
                    <td>
                        <button   className="btn btn-warning">Done</button>
                    </td>
                </tr> )}
            </tbody>
        </table>
     </div>
}