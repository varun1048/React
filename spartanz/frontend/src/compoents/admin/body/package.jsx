import Fess from "../../body/fees";
import AdminLinks from "./adminLinks";

export default function Package(){
    return    <div className="container">
     <div  className="row">
        <AdminLinks />
        <div className="col-lg-9">
            <Fess />
        </div>
    </div>
</div>
}