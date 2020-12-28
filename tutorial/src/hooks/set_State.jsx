import { useState ,useEffect } from "react"

import React from "react"

export default function Seting(){
    const [count, setCount] = useState(77)

    useEffect(()=>{
        document.title=`your count value ${count} `
    })
    

    return <div className="container">
        <p>number of count on click {count} </p>
        <div>
            <button onClick={()=>setCount( count +1)} >counting</button>
        </div>
    </div>
}