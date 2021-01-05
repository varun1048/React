import axios from "axios"
import React,{ useEffect ,useState } from "react"

import AdminLinks from "./adminLinks";



export default function MemberInfo(){
    let [members,setMembers] = useState([])
    
    let [finder,setFinder] = useState({
        name:""
    })


   useEffect(()=>{
        axios.get("http://localhost:5000/admin/getAll")
        .then(datas =>{
            if(finder.name !== ''){
                setMembers(datas.data.filter(str=>str.name.startsWith(finder.name)))
            }
            else{
                setMembers(datas.data)
            }
        })
    })
        
    

    function handleChange(event){
        const {name,value} = event.target 
        setFinder(prevInput =>{
            return {
                ...prevInput,
                [name]:value
            }
        })
    }
    return    <div className="container ">
     <div  className="row">
        <AdminLinks />

        <div className="col-sm-9  ">
            <h2> <span class="badge badge-secondary">Members</span></h2>
            <form >
                <div class="form-group">
                    <label for="usr">Name  </label>
                    <input type="text" class="form-control" name="name" onChange={handleChange}
                    placeholder="Enter"/>
                </div>
            </form>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                                    
                    { members.map(element => {
                            return <tr key={element.name} >
                                    <td>{element.name}</td>
                                    <td> {element.number} </td>
                                </tr>
                            }
                     )}
                </tbody>
            </table>
        </div>
    </div>
</div>
}









    //     {
        //     if(finder.name !== ''){
        //         // console.log("va")
        //         setMembers(datas.data.filter(str=>str.name.startsWith(finder.name)))
        //         // setMembers(datas.data)
        //     }
        //     else{
            
        //     }
        // })