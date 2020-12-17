import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const Navbar = (props) => {
    return (
        <nav className="navbar m-2 h1 navbar-light bg-secondary ">
        Countener
            <samp className="badge badge-pill badge-secondary">
                <button className="btn btn-danger m-1"> enter </button>
                Total prodects:{props.totelcounter}
            </samp>
        </nav>
      );
}
 
export default Navbar 
// class Navbar extends Component {
//     render() { 
//         return (
        
    // apple
    // drawing
    // orange
    // mango
    // banana
    // clipart
    // watermelon
    // healthy
    // pineapple
//         );
//     }
// }
 