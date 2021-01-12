import {BrowserRouter as Router , Route} from 'react-router-dom'

import Main from "./compoents/admin/main/main";
import Anavbar from "./compoents/admin/main/Anavbar";
import Join from './compoents/admin/main/join'
import LiveMembers from './compoents/admin/main/liveMembers'

import Package from "./compoents/admin/body/package"
import MemberInfo from './compoents/admin/body/memberInfo';
import SetExercise from './compoents/admin/body/SetExercise';
import TackAssessment from './compoents/admin/body/TackAssessment';
import ExpredPackage from './compoents/admin/body/ExpredPackage';
import Bio from './compoents/admin/body/bio';

export default function Admin() {
return <Router>

    <Route exact path="/admin">
        <Anavbar />
        <Main />
    </Route>

    <Route path="/admin/join">
        <Anavbar />
        <Join />
    </Route>

    <Route path="/admin/liveMembers" >
        <Anavbar />
        <LiveMembers />
    </Route>

    <Route path="/admin/package"> 
        <Anavbar /> 
        <Package />
    </Route>

    <Route path="/admin/memberInfo"> 
        <Anavbar /> 
        <MemberInfo />
    </Route>

    <Route path="/admin/bio/:id"> 
        <Anavbar /> 
        <Bio />
    </Route>

    <Route path="/admin/SetExercise"> 
        <Anavbar /> 
        <SetExercise />
    </Route>

    <Route path="/admin/TackAssessment/:id"> 
        <Anavbar /> 
        <TackAssessment />
    </Route>
    <Route path="/admin/ExpredPackage"> 
        <Anavbar /> 
        <ExpredPackage />
    </Route>
</Router>
}
