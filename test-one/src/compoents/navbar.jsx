import {Link} from 'react-router-dom'

import "./style/navbar.css"

export default function Navbar(){
    return <nav className="navbar bg-light  container">

        <h5> <Link className="link" to='/'> Home </Link>  </h5>
        <h5> <Link className="link" to='/notes'> Notes </Link>  </h5>
        <h5> <Link className="link" to='/create'> Create notes </Link>  </h5>
    
    </nav>
}