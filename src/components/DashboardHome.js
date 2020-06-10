import React from "react";
import { Link } from "react-router-dom";
import DashboardHomeCard from "./DashboardHomeCard"
import "./DashboardHome.css"
import session from "../assets/session.png"
import downloads from "../assets/downloads.png"
import question from "../assets/question.png"
import practice from "../assets/practice.png"
const DashboardHome = () => {
  return (
    <div className="dashboard-home">
      <div class="ui huge menu">
        <div class="header item">Welcome to Edunomics</div>
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
      <div>
      </div>
      <div className="dashboard-home__content">
        <div className="dashboard-home__content__row">
        <DashboardHomeCard img={session} content="interactive sessions"/> 
        <DashboardHomeCard img={practice} content="practice questions"/>
        </div>
        <div className="dashboard-home__content__row">
          <DashboardHomeCard img={downloads} content="downloads"/> 
          <DashboardHomeCard img={question} content="ask questions"/>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
