import axios from "axios"
import React,{ useEffect ,useState } from "react"

export default function LiveMembers(){
    let [members,setMembers] = useState([])

    useEffect(()=>{
        axios.post("http://localhost:5000/adminTwo/live")
        .then(datas =>{
            setMembers(datas.data)
        })
    })

    console.log(members)
    return  <div className="container">
        
        <h1> <span className="badge badge-secondary">Members</span></h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {/* {members.map( (element ,i) => <tr>
                    <td key={ ( i  ).toString() } > {element} </td>
                    <td>
                        <button   className="btn btn-warning">Done</button>
                    </td>
                </tr> )} */}
            </tbody>
        </table>
     </div>
}