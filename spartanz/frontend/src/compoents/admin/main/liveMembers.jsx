import axios from "axios"
import React,{ useEffect ,useState } from "react"

export default function LiveMembers(){
    let [members,setMembers] = useState([])

    useEffect(()=>{
        axios.post("http://localhost:5000/adminTwo/live2")
        .then(datas =>{
            setMembers(datas.data.array)
        })
        // console.log(members)
    })

    function singin(inner1,inner2){
        let obj = {"id":inner1,"days":inner2}
        axios.post("http://localhost:5000/adminTwo/live3",obj)
        .then(() =>console.log("singed"))
        .then((err) =>console.log("error on singing :"+err))
        
    }


    return  <div className="container">
        
        <h1> <span className="badge badge-secondary">Members</span></h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Days more</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {members.map( (element ,i) => <tr key={i}>
                    <td> {element.name} </td>
                    <td> {element.days} </td>
                    <td> {element.date} </td>
                    <td> {element.time} </td>
                    <td><button   className="btn btn-warning" onClick={()=>singin(element.id,element.days)}>Done</button></td>
                </tr> )}
            </tbody>
        </table>
     </div>
}