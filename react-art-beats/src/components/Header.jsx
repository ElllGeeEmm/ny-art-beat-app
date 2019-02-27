import React from 'react'
import NavForm from './NavForm'
import { Link } from 'react-router-dom'

export default (props) => {
  const { handleNavClick } = props;
  return(
    <div className='navbar'>
      <Link to="/">Home</Link>
      <NavForm handleNavClick={handleNavClick} />
    </div>
  )
}
