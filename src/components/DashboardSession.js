import React from "react"
import DashboardHomeCard from "./DashboardHomeCard"

const DashboardSession = () => {
    return(
        <div>
        <div class="ui huge menu">
        <div class="header item">Sessions</div>
        <div class="ui dropdown simple item">
            class
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="ui dropdown simple item">
              <i class="dropdown icon"></i>
               11 
               <div className="menu">
               <div class="ui dropdown simple item">
               
               Physics
               <div className="menu">
               <a class="item">
                Kinematics
                </a>
             
              <a class="item">
               Linear Motion
              </a>
              <a class="item" href="/">
               Rotaional Motion
              </a>
              <a class="item">
             Fluids
              </a>
              <a class="item">
                Gravitaion
              </a>
              <a class="item" >
               Energy and Momentum
              </a>
              <a class="item">
             Relative Motion
              </a>
           
        
             
            
                </div>
              </div>
              <a class="item" href="/">
               Maths
              </a>
             
                </div>
              </div>
              <div class="ui dropdown simple item">
              <i class="dropdown icon"></i>
               12 
              
              </div>
            
            </div>
          </div>
        
        <div className="menu right">

          <div class="ui dropdown simple item">
            My Account
            <i class="dropdown icon"></i>
            <div class="menu">
              <a class="item">
                <i class="edit icon"></i> My Profile
              </a>
              <a class="item" href="/">
                <i class="globe icon"></i> Logout
              </a>
              <a class="item">
                <i class="settings icon"></i> Account Settings
              </a>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default DashboardSession;
