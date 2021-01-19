import {Link } from 'react-router-dom'

export default function Navbar(params) {
    return <nav className="navbar navbar-expand-sm bg-dark d-flex justify-content-between">

    <ul className="navbar-nav   ">

            <li className="nav-item">
                <Link to="/" className="nav-item nav-link active">
                    SPARTANZ            
                </Link>
            </li>
        
    </ul>

    <ul className="navbar-nav  d-flex ">
        <li className="nav-item" >
            <Link to="/register" className="nav-item nav-link ">
                Join now
            </Link>
        </li>

        <li className="nav-item ">
            <Link to="/members/"  className="nav-item nav-link ">
                Members
            </Link>
        </li>
    

    </ul>
</nav>

}

