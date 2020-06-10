import React,{useState} from "react"

import "./HomePage.css"
import Navbar from "./Navbar"
import Login from "./Login"
const HomePage = () => {
    
    const [showLogin,setShowLogin]= useState(false)
    
    const showLoginHandler = () => {
        setShowLogin(showLogin?false:true)
    }
    return (
        <div className="home-page">
            <Navbar onPress={showLoginHandler}/>
             <Login show={showLogin} />
            <div className="home-page__title">
                <div className="home-page__title__main">
                    WHERE DO YOU WANT TO GO WITH US TODAY?
                </div>
                <div className="home-page__title__sub">
                    Shere Your ultimate travel bucket list with us
                </div>
            </div>
           
        </div>
    )
}

export default HomePage;