import React from 'react'

export default (props) => {
  const id = `${props.match.params.eventYear}/${props.match.params.eventId}`;
  const event = props.events.filter(event => event._attributes.id === id)[0];
  console.log(props.events);
  console.log(event);
  return(
    <div>
      {event && (
        <div>
          <h1>{event.Name._text}</h1>
          <div>Starts: {event.DateStart._text}</div>
          <div>Ends: {event.DateEnd._text}</div>
          <div>{event.Description._cdata}</div>
        </div>
      )}
    </div>
  )
}
