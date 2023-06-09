import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import { toast } from 'react-hot-toast'
import SearchField from '../Form/SearchField'
import './header.css'
import skt from '../../../src/images/skt.png'
import { BsCart} from 'react-icons/bs';
import { AiOutlineHeart} from 'react-icons/ai';
import useCategory from '../../hooks/useCategory'
import { useCart } from "../../context/cart";
import { Badge } from "antd";




function Header() {
  const [auth,setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout =()=>{
    setAuth({
    })
    localStorage.removeItem('auth')
    toast.success('Logout Successfully')
  }
  return (
    <>
    <nav className="navbar navbar sticky-top navbar-expand-lg " color='#595959'>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavLink to='/'  className="navbar-brand" href="#">
       <img className='logo_min' src={skt} alt='logo'/>
      </NavLink>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
      <li className="nav-item">
          <NavLink to='/' className="nav-link" >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/category' className="nav-link"  >
            Mens
          </NavLink>
        </li>
        <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to={"/categories"}>
                      All Categories
                    </NavLink>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
      </ul>
      <SearchField/>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        {
          !auth.user?(<>
          <li className="nav-item">
          <NavLink to='/signup' className="nav-link">
            Signup
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/login' className="nav-link">
            Login
          </NavLink>
          </li>
          </>):(
          <>
          <li className="nav-item dropdown">
            <NavLink to='/' className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             {auth?.user?.name}
            </NavLink>
            <ul className="dropdown-menu">
            <li>
              <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin":"user"}`} className="dropdown-item">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleLogout} to='/login' className="dropdown-item">
                Logout
              </NavLink>
            </li>
          </ul>
        </li>
            
          </>)
        }
        
        <li className="nav-item">
          <NavLink to='/cart' className="nav-link" >
            <AiOutlineHeart/>
          </NavLink>
        </li>
        <li className="nav-item">
        <Badge count={cart?.length} showZero>
          <NavLink to='/cart' className="nav-link" >
          <BsCart/>
          </NavLink>
          </Badge>
          
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header