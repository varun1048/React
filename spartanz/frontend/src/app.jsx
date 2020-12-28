import {BrowserRouter as Router , Route} from 'react-router-dom'

import Navbar from "./compoents/main/navbar"
import MainBody from './compoents/main/mainBody'
import Register  from "./compoents/user_login/register "
import Member from "./compoents/user_login/member.jsx"

export default function App() {

    return <div>
        <Router >
            <Navbar />

            <Route exact path="/" >
                <MainBody />
            </Route>

            <Route  path="/member" >
                <Member />
            </Route>

            <Route  path="/register" >
                <Register   />
            </Route>


        </Router>
    </div>
}