import React from 'react'
import NavForm from './NavForm'
import { Link } from 'react-router-dom'

export default (props) => {
  const { handleNavClick } = props;
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to='/eventList'>Events</Link>
      <NavForm handleNavClick={handleNavClick} />
    </div>
  )
}
