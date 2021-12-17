import React, { Component } from 'react';
import '../LoginPage.css';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }
    render() {
        return(
                <>
                    <input className="loginPage__text" type="text" placeholder="Email" />
                    <input className="loginPage__text" type="text" placeholder="Name" />
                    <input className="loginPage__text" type="text" placeholder="UserName" />
                    <input className="loginPage__text" type="password" placeholder="password"/>
                    <button className="loginButton">Create Account</button>
                </>
        )
    }

}


export default SignUp;