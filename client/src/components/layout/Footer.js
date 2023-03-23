import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <div className='footer bg-dark text-light p-3'>
        <h4 className='text-center'>Sketchgenz All right Reserved &copy; Lantaspera </h4>
        <p  className=' text-center mt-3'>
          <Link to='/about'>about |</Link>
          <Link to='/contact'>Contact</Link>
        </p>
    </div>
  )
}

export default Footer