import {BrowserRouter as Router , Route} from 'react-router-dom'

import Navbar from "./compoents/main/navbar"
import MainBody from './compoents/main/mainBody'
import Register  from "./compoents/members-info/register "
import Member from "./compoents/members-info/member.jsx"
import Members from './compoents/members-info/members.jsx'

export default function App() {

    return <div>
        <Router >
            <Navbar />

            <Route exact path="/" >
                <MainBody />
            </Route>

            <Route  path="/members" >
                <Members />
            </Route>

            <Route  path="/register" >
                <Register   />
            </Route>
            <Route  path="/member" >
                <Member />
                {/* <   /> */}
            </Route>
        </Router>
    </div>
}