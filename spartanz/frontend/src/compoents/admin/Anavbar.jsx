import {Link } from 'react-router-dom'
import "./style/Anavbar.css"

export default function Anavbar(params) {
    return <nav class="navbar navbar-expand-sm  S-nav
     d-flex justify-content-between   ">



    <ul class="navbar-nav   ">
        <li class="nav-item" >
            <Link to="/join" className="nav-item Anavbar nav-link ">
                Join now
            </Link>
        </li>
    </ul>
    

    <ul class="navbar-nav   ">
            <li class="nav-item">
                <Link to="/admin" className="nav-item nav-link Anavbar active">
                    SPARTANZ            
                </Link>
            </li>
    </ul>


    <ul class="navbar-nav   ">
        <li className="nav-item ">
            <Link to="activeMembers"  className="nav-item Anavbar nav-link ">
                active Members
            </Link>
        </li>
    </ul>
    

</nav>

}

