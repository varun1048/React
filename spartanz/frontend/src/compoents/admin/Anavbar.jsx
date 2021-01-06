import {  useState } from 'react'
import {Link } from 'react-router-dom'
import "./style/Anavbar.css"

export default function Anavbar(params) {
    let count =  useState(0)
    // useEffect(()=>{

    // })

    return <nav class="navbar   S-nav
     d-flex justify-content-between   ">



    <ul class="navbar-nav   ">
        <li class="nav-item" >
            <Link to="/admin/join" className="nav-item Anavbar nav-link ">
                Join now
            </Link>
        </li>
    </ul>
    

    <ul class="navbar-nav   ">
            <li class="nav-item">
                <b>
                <Link to="/admin" className="nav-item nav-link Anavbar active">
                    <h4>
                        SPARTANZ            
                    </h4>
                </Link>
                </b>
            </li>
    </ul>


    <ul class="navbar-nav   ">
        <li className="nav-item ">
            <Link to="/admin/liveMembers"  className="nav-item Anavbar nav-link ">
                Live Members <span class="badge badge-light">{count}</span>
            </Link>
        </li>
    </ul>
    

</nav>

}

