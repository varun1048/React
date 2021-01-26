import {Link } from 'react-router-dom'
export default function Navbar(params) {
    let logo = "https://i.pinimg.com/originals/5a/26/d6/5a26d67018bd284dd97ae0d0e2390b88.jpg"

    return <nav className="navbar    mainPageNavbar d-flex justify-content-between ">
    
    <ul className="navbar-nav ">

            <li className=" navbar-item  ">
                <Link to="/" className="nav-item nav-link  active">
                    <span>
                    SPARTANZ <small>Fitness</small>
                    </span>
                </Link>

            </li>
        
    </ul>
        <li className=" navbar-brand ">
            <img src={logo} className="rounded-circle " alt="logo" width="50" height="50"/> 
        </li>

    <ul className="navbar-nav  d-flex ">
        
        <li className="nav-item ">
            <Link to="/members/"  className="nav-item   nav-link ">
                Members
            </Link>
            
        </li>
    
    </ul>
</nav>

}

