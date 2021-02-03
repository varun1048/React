import axios from "axios"
import React,{ useEffect ,useState } from "react"
import {Link} from 'react-router-dom'
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
                let names =datas.data.filter(str=>str.name.startsWith(finder.name))
                    setMembers(names)
            }
            else{
                setMembers(datas.data)
            }
            
        })
        .catch(err =>console.log("!on member info" +err))

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




    
    return    <div className="container-fluid  ">
     <div  className="row">
        <AdminLinks />

        <div className="col-sm-9  ">
            <h2> <span className="badge badge-secondary">Members</span></h2>
            <form >
                <div className="form-group">
                    <label htmlFor="usr">Name  </label>
                    <input type="text" className="form-control" name="name" onChange={handleChange}
                    placeholder="Enter"/>
                </div>
            </form>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Card Number</th>
                        <th>Days more</th>
                    </tr>
                </thead>
                <tbody>
                
                        
                    { members.map( (element , i) => {
                        return<tr key={i} >
                                    <td   >
                                    <Link to={`/admin/bio/${element._id}`}>
                                        {element.name}
                                    </Link>
                                    </td>
                                    <td>2</td>
                                    <td>34</td>
                               </tr> 
                            }
                     )}
                </tbody>
            </table>
        </div>
    </div>
</div>
}
    