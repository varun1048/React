// import axios from "axios"
import { useState } from "react"

export default function Member(){

    const [notes, setNotes] = useState(

        
        fetch("http://localhost:5000/members/profile").then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonR => setNotes(jsonR) )

        )
    console.log("varun "+notes)
// axios.get("http://localhost:5000/members/profile")
    return <div>wellcome  </div>
}