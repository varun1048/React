import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'

import Navbar from "./compoents/main/navbar"
import MainBody from './compoents/main/mainBody'
import Register  from "./compoents/members-info/register "
import Member from "./compoents/members-info/member.jsx"
import Members from './compoents/members-info/members.jsx'

export default function App() {

    return <div>
        <Router >
            <Navbar />
            <Switch>

            <Route exact path="/" >
                <MainBody />
            </Route>

            <Route  path="/members" >
                <Members />
            </Route>

            <Route  path="/register" >
                <Register   />
            </Route>
            <Route  path="/member/:id" >
                <Member />
            </Route>
            </Switch>
        </Router>
    </div>
}