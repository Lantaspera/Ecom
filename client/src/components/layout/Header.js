import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavLink to='/'  className="navbar-brand" href="#">
        Sketch Genz
      </NavLink>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/' className="nav-link active" >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/category' className="nav-link active" >
            Category
          </NavLink>
        </li>
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
        <li className="nav-item">
          <NavLink to='/cart' className="nav-link" >
            Cart (0)
          </NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header