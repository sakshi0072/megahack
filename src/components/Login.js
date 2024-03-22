import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <section className="login-main">
            <div className="login-container">
                <h2>Login Here!!</h2>
                <label htmlFor="">Username</label>
                <input type="text" name="username" id="username" placeholder=''/>
                <label htmlFor="">Password</label>
                <input type="password" name="password" id="password" />
                <button>Submit</button>
            </div>
        </section>
    )
}

export default Login
