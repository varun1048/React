import axios from "axios"
import React,{ useEffect ,useState } from "react"
import {useHistory} from 'react-router-dom'
import AdminLinks from "./adminLinks";

export default function MemberInfo(){
    const history = useHistory()

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




    
    return    <div className="container ">
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
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Card Number</th>
                        <th>Days more</th>
                    </tr>
                </thead>
                <tbody>
                                    
                    { members.map(element => {
                            return<tr key={element.name} >
                                    <td  onClick={() => history.push(`/admin/bio/${element._id}`)} >{element.name}</td>
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
    