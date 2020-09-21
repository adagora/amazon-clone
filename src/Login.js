import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

// step 1 redirect
// step 2 listening if user log in/out and pushing to data layer
function Login() {
    const history= useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();  //this stop the refresh
        // do the login logic...

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in, redirected to homepage ....
                history.push("/");
            })
            .catch((error) => alert(error.message));
    }  

    const register = (event) => {
        event.preventDefault();  //this stop the refresh
        // do the register logic...

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // created a user and logged in, redirected to homepage
                if (auth) {
                    history.push("/");   
                }
            })
            .catch((error) => alert(error.message));
        
    }  
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} className="login__signInButton">Sign In</button>
                </form>
                
                <p>
                    By signing-in you agree to Amazon's Conditions of Use& Sale.
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon Acount</button>
            </div>
            
        </div>
    )
}

export default Login
