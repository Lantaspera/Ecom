import React, {useState} from 'react'
import Layout from '../../components/layout/Layout'
import './login.css'
import {Link} from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Login() {
    
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault();
       try {
          const res= await axios.post(`/api/v1/auth/login`,
          {email,password}
          );
          if(res && res.data.success){
              toast.success(res.data.message)
              navigate('/')
          }else{
              toast.error(res.data.message)
          }
       } catch (error) {
          console.log(error)
          toast.error('something went wrong')
       }
      }
      
    return (
        <Layout title='Login - ecommerce'>
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
                <form className="form-login" onSubmit={handleSubmit}>
                    <section className="login-right-split">
                        <h2 className="login-header2">Login</h2>
                        <div className="login-container">
                        </div>
                    </section>
                    <div className="login-input-container">
                        <label className="login-label" for="email"  >Email Address</label>
                        <input className="login-inputs" type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} id="email"  placeholder="email"></input>
                    </div>
                    <div className="login-input-container">
                        <label className="login-label" for="password"  > Password</label>
                        <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" 
                         ></input>
                    </div>
                    <button className="login-btn" type="submit">Login</button>
                            <button className="login-google">
                                <span className="google-spacing">
                                    <Link to='/' className="login-text"><i className="fab fa-google"></i>Login with Google</Link>
                                </span>
                            </button>
                    <p className="login">Not a member? <Link ><strong>Sign Up</strong></Link></p>
                </form>
            </div>
        </div>
        </Layout>
    )
}

export default Login
