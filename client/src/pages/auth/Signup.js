import React, {useState} from 'react'
import Layout from '../../components/layout/Layout'
import './signup.css'
import {Link} from 'react-router-dom'


function Signup() {

const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(name,email,password);
}

  return (
    <Layout title='Signup - ecommerce'>
      <div className="split-screen"> 
            <div className="left"> 
                <section className="split">
                    <span className="logo-title">
                        <h3 className="logo-signup">Logoname</h3>
                    </span>
                    <span className="content-center">
                        <h1 className="signup-header1">Lorem Ipsum is simply dummy text of the printing</h1>
                        <p className="para-text"> Welcome  Please Sign Up to your account. </p>
                    </span>
                </section>
            </div>

            <div className="right">
                
            <form className="form-signup"  onSubmit={handleSubmit}>
                <section className="r-split">
                    <h2 className="signup-header2">Sign Up</h2>
                    <div className="login-container">
                        <button className="google" >
                            <span className="google-space">
                                <Link to='*' className="signup-text" ><i class="fab fa-google"></i>Sign up with Google</Link >
                            </span>
                        </button>
                    </div>
                </section>
                <div className="input-container">
                    <label className="signup-label" for="username"  >Name</label>
                    <input type="text" name="name"  id="name" value={name} onChange={(e)=> setName(e.target.value)}  required></input>
                </div>
                
                <div className="input-container">
                    <label className="signup-label" for="email"  >Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} required ></input>
                </div>
             
                <div className="input-container password">
                    <label className="signup-label" for="password"  >password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} required placeholder="6+ charaters" ></input>
                    
                </div>
               
                <button className="signup-btn" type="submit"  >Create an Account</button>
                <div className="legal">
                    <label className="signup-label" >
                        
                        <span className="checkmark"></span>
                        I agree to accept to the <Link to='/terms-legal' class="terms-legal" >Terms of Service</Link> &amp; <Link to='/ptivacy-policy' >Privacy Policy</Link> 
                    </label>
                    <p className="login">Alredy have an account? <Link to='/login'><strong>Login</strong></Link></p>
                </div>
            </form>
            </div>
        </div>
    </Layout>
    
  )
}

export default Signup