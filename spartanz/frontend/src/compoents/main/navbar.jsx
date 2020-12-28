import {Link } from 'react-router-dom'

export default function Navbar(params) {
    return <nav class="navbar navbar-expand-lg bg-light justify-content-between">

    <ul class="navbar-nav">

        <li class="nav-item">
            <Link to="/" className="nav-item nav-link active">
                SPARTANZ            
            </Link>
        </li>
        
    </ul>

    <ul class="navbar-nav justify-content-end">


        <li class="nav-item" >
            <Link to="/register" className="nav-item nav-link ">
                Join now
            </Link>
        </li>
    
        <li className="nav-item ">
            <Link to="/member"  className="nav-item nav-link ">
                Members
            </Link>
        </li>
    </ul>

</nav>

}


// <nav className="navbar 
// d-flex justify-content-bettwen bg-dark  ">

// <Link to="/" className="nav-item nav-link active">
//     SPARTANZ            
// </Link>

// <div >


// <Link to="/member">
//     Members
// </Link>
// </div>

// </nav>