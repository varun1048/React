import axios from "axios"

import {  useState ,useEffect } from 'react'
import {Link } from 'react-router-dom'

import "../style/Anavbar.css"



export default function Anavbar(params) {
    let [count,setCount] =  useState(0)
    useEffect(()=>{
        axios.get("http://localhost:5000/members/live")
        .then(datas =>{          
            setCount(datas.data.length)
        })
    })

    return <nav className="navbar   S-nav
     d-flex justify-content-between   ">



    <ul className="navbar-nav   ">
        <li className="nav-item" >
            <Link to="/admin/join" className="nav-item Anavbar nav-link ">
                Join now
            </Link>
        </li>
    </ul>

    

    <ul className="navbar-nav   ">
            <li className="nav-item">
                <b>
                <Link to="/admin" className="nav-item nav-link Anavbar active">
                    <h4>
                        SPARTANZ            
                    </h4>
                </Link>
                </b>
            </li>
    </ul>


    <ul className="navbar-nav   ">
        <li className="nav-item ">
            <Link to="/admin/liveMembers"  className="nav-item Anavbar nav-link ">

                Live Members <span className ="badge badge-light">{count}</span>
            </Link>
        </li>
    </ul>
</nav>

}

