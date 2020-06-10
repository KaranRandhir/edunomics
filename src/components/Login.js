import React,{useState} from "react"
import {Link} from "react-router-dom"

import "./Login.css"
const Login = (props) => {
    
    const [user,setUser] = useState("")
    const [pass,setPass] = useState("")
    return (
        <div style={{visibility:`${props.show?"":"hidden"}`}} className="ui login form">
            <div className='feid'>
                <label>Username</label>
                <input type="text" 
                name="username" 
                value={user}
                onChange={e=>setUser(e.target.value)}/>
            </div>
            <div className='feid'>
                <label>Password</label>
                <input type="text" 
                name="password" 
                value={pass}
                onChange={e=>setPass(e.target.value)}/>
            </div>
            <Link to="/dashboard">
            <button onClick={props.onPress} class="ui primary button">
            Login
            </button>
            </Link>
           
        </div>
    )
}

export default Login;