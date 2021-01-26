import { Link } from "react-router-dom";

export default function AdminLinks(){
    return <div className="col-sm-2 " >
            <br/> 
        <ul className="nav flex-column">
        <li className="nav-item">
            <Link className="nav-link "  to="/admin/package"> Package </Link> 
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/admin/memberInfo"> Member Info </Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" to="/admin/ExpredPackage">Expred Package</Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" to="/admin/Enquiry">Enquiry</Link>
        </li>
        
    </ul>
 </div>
}