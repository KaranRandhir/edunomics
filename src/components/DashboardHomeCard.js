import React from 'react'
import Dashboard from './Dashboard'

import "./DashboardHomeCard.css"
const DashboardHomeCard = (props) => {
    return (
        <div className="dashboard-home-card">
            <img src={props.img} alt="session"/>
            <div>
                {props.content}
            </div>
        </div>
    )
}

export default DashboardHomeCard