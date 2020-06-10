import React from "react"
import {BrowserRouter as Router,Switch,Route, useRouteMatch} from "react-router-dom"
import DashboardHome from "./DashboardHome"
import DashboardSession from "./DashboardSession"
import SideBar from "./SideBar"
import "./Dashboard.css"
import DashboardHomeCard from "./DashboardHomeCard"
const Dashboard = ({match}) => {
    console.log(match)
    return(
        <div className="dashboard">
  
            <div style={{width:"7.4rem"}}>
            <SideBar/>
            </div>
            <div style={{width:"100%"}} className="dashboard__content">
                <div className="dashboard__content__dynamic">
              
                {match.params.page==="session" && <DashboardSession/>}
                {match.path==="/dashboard" &&<DashboardHome/>}
           </div>
           <div className="dashboard__cards">
                <div className="dashboard__cards__row">
                    <div className="dashboard__cards__row__card-small">
                        <div className="dashboard__cards__row__card__heading">Topics Covered</div>
                        <div className="ui divider"></div>
                    </div>
                    <div className="dashboard__cards__row__card-small">
                    <div className="dashboard__cards__row__card__heading">Recent activities</div>
                    <div className="ui divider"></div>
                    </div>
                </div>
                <div className="dashboard__cards__row">
                <div className="dashboard__cards__row__card-big">
                <div className="dashboard__cards__row__card__heading">Performance</div>
                <div className="ui divider"></div>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Dashboard;