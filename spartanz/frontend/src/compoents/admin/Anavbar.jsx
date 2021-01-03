import {Link } from 'react-router-dom'
import "./Anavbar.css"

export default function Anavbar(params) {
    return <nav class="navbar navbar-expand-sm Anavbar  d-flex justify-content-between">

    <ul class="navbar-nav   ">
dfg
            <li class="nav-item">
                <Link to="/" className="nav-item nav-link active">
                    SPARTANZ            
                </Link>
            </li>
        
    </ul>

    <ul class="navbar-nav  d-flex ">
        <li class="nav-item" >
            <Link to="/register" className="nav-item nav-link ">
                Join now
            </Link>
        </li>

        <li className="nav-item ">
            <Link to="/members/"  className="nav-item nav-link ">
                active Members
            </Link>
        </li>
    

    </ul>
</nav>

}

