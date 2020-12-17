// import axios from "axios"
import {useEffect, useState} from 'react'

export default function Notes(){
    const [notes, setNotes] = useState([{
        title:"",
        content:""
    }])

    useEffect(()=>{
        fetch("/notes").then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonR => setNotes(jsonR) )
    })
    
    return (
        <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">
                        Title
                    </th>
                    <th scope="col">
                        Content
                    </th>
                </tr>
            </thead>
            <tbody>
                {notes.map(note => 
                    <tr>
                        <td>
                            {note.title}
                        </td>
                        <td>
                            {note.content}
                        </td>
                    </tr>
                )}
            </tbody>

        </table>


        </div>
    )
}