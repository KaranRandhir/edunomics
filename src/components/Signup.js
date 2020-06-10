import React from "react"

import books from "../assets/bookspic.jpg"
import "./Signup.css"
const Signup = () => {
    return (
        <div className="signup">
           
                <img alt="books" className="signup__pic" src={books}/>
            
            <div className="signup__form">
                <div className="signup__form__heading">Signup</div>
                <div className="ui fluid form">
                    <div  className="feild">
                        <label>Name</label>
                        <input name="name" type="text" />
                    </div>
                    <div  className="feild">
                        <label>Email</label>
                        <input name="email" type="text" />
                    </div>
                    <div  className="feild">
                        <label>Password</label>
                        <input name="password" type="text" />
                    </div>
                    <div  className="feild">
                        <label>Mobile Number</label>
                        <input name="mobileno" type="text" />
                    </div>
                    
  

                    
                </div>
                <div class="ui submit button">Submit</div>
            </div>
        </div>
    )
}

export default Signup;