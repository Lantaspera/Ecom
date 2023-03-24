import React from 'react'
import Layout from '../../components/layout/Layout'
import './login.css'

function Login() {
    
    return (
        <Layout>
        <div className="login-split-screen">
            <div className="login-left">
                <section className="login-split">
                    <span className="login-logo-title">
                        <h3 className="login-logo">Logoname</h3>
                    </span>
                    <span className="login-content-center">
                        <h1 className="login-header1">Lorem Ipsum is simply dummy text of the printing</h1>
                        <p className="login-para-text"> Welcome  Please Sign Up to your account. </p>
                    </span>
                </section>
            </div>
            <div className="login-right">
                <form className="form-login" >
                    <section className="login-right-split">
                        <h2 className="login-header2">Login</h2>
                        <div className="login-container">
                        </div>
                    </section>
                    <div className="login-input-container">
                        <label className="login-label" for="email"  >Email Address</label>
                        <input className="login-inputs" type="email" name="email"  id="email"  placeholder="email"></input>
                    </div>
                    <div className="login-input-container">
                        <label className="login-label" for="password"  > Password</label>
                        <input type="password" name="password" placeholder="Password" 
                         ></input>
                    </div>
                    <button className="login-btn" type="submit">Login</button>
                            <button className="login-google">
                                <span className="google-spacing">
                                    <a className="login-text" href="#"><i className="fab fa-google"></i>Login with Google</a>
                                </span>
                            </button>
                    <p class="login">Not a member? <a href="#"><strong>Sign Up</strong></a></p>
                </form>
            </div>
        </div>
        </Layout>
    )
}

export default Login
