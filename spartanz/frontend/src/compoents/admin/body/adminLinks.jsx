import { Link } from "react-router-dom";

export default function AdminLinks(){
    return <div className="col-sm-3 " >
            <br/> 
        <ul class="nav flex-column">
        <li class="nav-item">
            <Link className="nav-link "  to="/admin/package"> Package </Link> 
        </li>
        <li class="nav-item">
            <Link className="nav-link" to="/admin/memberInfo"> Member Info </Link>
        </li>
        <li class="nav-item">
            <Link className="nav-link" to="/admin/SetExercise">Set Exercise </Link>
        </li>
        <li class="nav-item">
            <Link className="nav-link" to="/admin/TackAssessment">Tack Assessment</Link>
        </li>     
        <li class="nav-item">
            <Link className="nav-link" to="/admin/ExpredPackage">Expred Package</Link>
        </li>
    </ul>
 </div>
}