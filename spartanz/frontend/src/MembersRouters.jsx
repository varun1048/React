import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'

import Navbar from      "./compoents/membersF/main/navbar"
import MainBody from    './compoents/membersF/main/mainBody'

import Register  from   "./compoents/membersF/members-info/register "
import Member from      "./compoents/membersF/members-info/member.jsx"
import Members from     './compoents/membersF/members-info/members.jsx'




export default function MembersRouters() {

    return <div>
           <Router >
            <Switch>

              <Route exact path="/" >
                    <Navbar />
                    <MainBody />
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