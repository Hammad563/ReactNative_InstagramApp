import React, { Component } from 'react'
import '../LoginPage.css'

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }
    render() {
        return(
                <>
                    <input className="loginPage__text" type="text" placeholder="Email" />
                   <input className="loginPage__text" type="password" placeholder="password"/>
                   <button className="loginButton">Sign In</button>
                </>
        )
    }

}


export default SignIn;