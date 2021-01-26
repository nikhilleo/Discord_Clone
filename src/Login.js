import React from 'react'
import "./Login.css"
import logo from "./discord-logo-png-7634.png"
import { Button } from '@material-ui/core'
import { auth , provider} from "./Firebase"

function Login() {

    const signin = ()=>{
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img className="image" src={logo} alt=""/>
            </div>
            <Button onClick={signin}>Sign In</Button>
        </div>
    )
}

export default Login
