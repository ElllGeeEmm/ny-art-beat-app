import React from 'react'
import EventList from './EventList'

export default (props) => {
  const { events } = props;
  console.log(events);
  return(
    <div>
      <EventList events={events} />
    </div>
  )
}
