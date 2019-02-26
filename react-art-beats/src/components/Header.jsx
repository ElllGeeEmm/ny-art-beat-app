import React from 'react'
import { Link, Route } from 'react-router-dom'

export default (props) => {
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to='/eventList'>Events</Link>
    </div>
  )
}
