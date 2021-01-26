import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'

import Navbar from      "./compoents/membersF/main/navbar"
import MainBody from    './compoents/membersF/main/mainBody'

import Register  from   "./compoents/membersF/members-info/register "
import Member from      "./compoents/membersF/members-info/member.jsx"
import Members from     './compoents/membersF/members-info/members.jsx'
import Footer from './compoents/membersF/main/Footer'

import "./compoents/membersF/style/styles.css"
import "./compoents/membersF/style/imgs.css"
import ContactUs from './compoents/membersF/body/ContactUs'


export default function MembersRouters() {

    return <div  >

           <Router >
            <Switch>

              <Route exact path="/" >
                    <Navbar />
                        <MainBody />
                    <Footer />                
                </Route>

                <Route  path="/members" >
                    <Navbar />
                    <Members />
                    <Footer />                

                </Route>

                <Route  path="/register" >
                    <Navbar />
                    <Register   />
                    <Footer />                

                </Route>
                <Route  path="/member/:id" >
                    <Navbar />
                    <Member />
                    <Footer />                
                </Route>

                <Route  path="/ContactUs" >
                    <Navbar />
                        <ContactUs />
                    <Footer />                
                </Route>
            </Switch>

        </Router>

    </div>
}