import React from "react"
import Signup from "./Signup"
import {Link,useRouteMatch} from "react-router-dom"


const SideBar = () => {
    
  return (
     
        <div class="ui left demo vertical visible inverted sidebar labeled icon menu">
  <Link to="/dashboard" class="item">
    <i class="home icon"></i>
    Home
  </Link>
  <Link to={`/dashboard/session`} class="item">
    <i class="block layout icon"></i>
    Sessions
  </Link>
  <a class="item">
  <i class="download icon"></i>
    Downloads
  </a>
  <a class="item">
  <i class="ellipsis horizontal icon"></i>
    Settings
  </a>
  <a class="item">
  <i class="info circle icon"></i>
    About
  </a>
</div>

    )
}

export default SideBar;