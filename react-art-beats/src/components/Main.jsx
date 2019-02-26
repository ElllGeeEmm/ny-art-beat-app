import React from 'react'
import EventList from './EventList'
import Welcome from './Welcome'
import { Link, Route } from 'react-router-dom'

export default (props) => {
  const { events } = props;
  return(
    <div>
      <Route exact path='/' render={(props) => (
        <Welcome {...props} />
      )}/>
      <Route path='/eventList' render={(props) => (
        <EventList {...props} events={events} />
      )}/>
    </div>
  )
}
