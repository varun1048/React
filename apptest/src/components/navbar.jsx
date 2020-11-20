import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const Navbar = (props) => {
    return (
        <nav className="navbar h3 navbar-light bg-light">
        Countener
            <samp className="badge badge-pill badge-secondary">
                Total prodects:{props.totelcounter}
            </samp>
        </nav>
      );
}
 
export default Navbar 
// class Navbar extends Component {
//     render() { 
//         return (
        
//         );
//     }
// }
 