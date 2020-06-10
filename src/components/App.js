import React from 'react';
import {Route,BrowserRouter as Router, Switch} from "react-router-dom"

import HomePage from "./HomePage"
import Signup from "./Signup"
import SideBar from './SideBar';
import Dashboard from "./Dashboard"

function App() {
  return (
   
   <Router>
     <Switch>
       <Route path="/" exact component={HomePage}/>
       <Route path="/signup" exact component={Signup}/>
       <Route path="/dashboard" exact component={Dashboard}/>
       <Route path="/dashboard/:page" exact component={Dashboard}/>
       </Switch>
    </Router>
   
  );
}

export default App;
