import React from 'react'

export default (props) => {
  const id = `${props.match.params.eventYear}/${props.match.params.eventId}`;
  const event = props.events.filter(event => event._attributes.id === id)[0];
  console.log(props.events);
  console.log(event.Description._cdata);
  return(
    <div>
      {event && (
        <div>
          <h1>{event.Name._text}</h1>
          <img src={event.Image[2]._attributes.src} alt={event.Name._text} />
          <div>{event.Price._attributes.free === '1' && 'Free'}</div>
          <div>Starts: {event.DateStart._text}</div>
          <div>Ends: {event.DateEnd._text}</div>
          <div className='venue'>
            <div>{event.Venue.Type._text}: {event.Venue.Name._text}</div>
            <div>{event.Venue.Phone._text}</div>
            <div>{event.Venue.Address._text}</div>
            <div>opens: {event.Venue.OpeningHour._text}</div>
            <div>closes: {event.Venue.ClosingHour._text}</div>
          </div>
          <div dangerouslySetInnerHTML={{__html: event.Description._cdata}}></div>
        </div>
      )}
    </div>
  )
}
