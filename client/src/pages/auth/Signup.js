import React, {useState} from 'react'
import Layout from '../../components/layout/Layout'
import './signup.css'
import {Link} from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import img1 from "../../images/img1.png";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

function Signup() {

const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const navigate = useNavigate()

const handleSubmit = async(e) =>{
  e.preventDefault();
 try {
    const res= await axios.post(`/api/v1/auth/register`,
    {name,email,password}
    );
    if(res && res.data.success){
        toast.success(res.data.message)
        navigate('/login')
    }else{
        toast.error(res.data.message)
    }
 } catch (error) {
    console.log(error)
    toast.error('something went wrong')
 }
}

  return (
    <Layout title='Signup - ecommerce'>
      <div className="split-screen"> 
            <div className="left"> 
                <section className="split">
                    <img className='signup_image' src={img1} alt='image1'/>
                </section>
            </div>

            <div className="right">
                
            <form className="form-signup"  onSubmit={handleSubmit}>
                <section className="r-split">
                    <h2 className="signup-header2">Sign Up</h2>
                    <div className="login-container">
                        <button className="google" >
                        
                                <Link to='*' className="signup-text" ><FcGoogle/></Link >
                         
                        </button>
                        <button className="google" >
                        
                                <Link to='*' className="signup-text" ><FaFacebook color='#4267B2'/></Link >
                         
                        </button>
                    </div>
                    <h1 className='or_section'>or</h1>
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