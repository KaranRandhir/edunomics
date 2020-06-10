import React from "react"
import {Link} from "react-router-dom"

import  "./Navbar.css"
const Navbar = (props) =>{
    return(
        <div className="navbar">
            <div className="navbar__company-name">
                Edunomics
            </div>
            <div className="navbar__right">
                <div    className="navbar__right__login">
                <button onClick={props.onPress} class="ui inverted button">Login</button>
                </div>
                <div>
                    <Link to="/signup">
                <button class="ui inverted button">Signup</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;