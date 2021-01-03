import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'

import Navbar from "./compoents/main/navbar"
import MainBody from './compoents/main/mainBody'
import Register  from "./compoents/members-info/register "
import Member from "./compoents/members-info/member.jsx"
import Members from './compoents/members-info/members.jsx'

import Main from "./compoents/admin/main";
import Anavbar from "./compoents/admin/Anavbar";
import Join from './compoents/admin/join'
import ActiveMembers from './compoents/admin/activeMembers'


export default function App() {

    return <div>
           <Router >

            <Switch>
                <Route exact path="/" >
                    <Navbar />
                    <MainBody />
                </Route>

                <Route path="/admin">
                    <Anavbar />
                    <Main />
                </Route>

                <Route path="/join">
                    <Anavbar />
                    <Join />
                </Route>
                <Route path="/activeMembers">
                    <Anavbar />
                    <ActiveMembers />
                </Route>



                <Route  path="/members" >
                    <Navbar />
                    <Members />
                </Route>

                <Route  path="/register" >
                    <Navbar />
                    <Register   />
                </Route>
                <Route  path="/member/:id" >
                    <Navbar />
                    <Member />
                </Route>


            </Switch>
        </Router>


    </div>
}