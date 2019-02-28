import React from 'react'
import EventList from './EventList'
import EventDetail from './EventDetail'
import Welcome from './Welcome'
import { Route } from 'react-router-dom'

export default (props) => {
  const { events, setEvents } = props;
  return(
    <div>
      <Route exact path='/' render={(props) => (
        <Welcome {...props} />
      )} />

      <Route exact path='/eventList/:eventType' render={(props) => (
        <EventList {...props} events={events} setEvents={setEvents} />
      )} />

      <Route path='/eventList/:eventType/eventDetail/:eventYear/:eventId' render={(props) => (
        <EventDetail {...props} events={events} setEvents={setEvents} />
      )} />
    </div>
  )
}
