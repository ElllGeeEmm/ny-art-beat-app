import React from 'react'
import { styleAddresses } from '../services/artBeatHelpers'

export default (props) => {
  const { events, setEvents } = props;
  const id = `${props.match.params.eventYear}/${props.match.params.eventId}`;
  setEvents(events, props.match.params.eventType);
  const event = props.events.filter(event => event._attributes.id === id)[0];
  return(
    <div className='event'>
      {event && (
        <div>
          <h1>{event.Name._text}</h1>

          <div className='event-detail-header'>
            <img src={event.Image[2]._attributes.src} alt={event.Name._text} />
            <div className='price-venue'>
              <div className='price'>
                <div>{event.Price._attributes.free === '1' && 'Free'}</div>
                {event.DateEnd._text === '0000-00-00' ? (
                  <div>Permanent Installation</div>
                ) : (
                  <div>Ends: {event.DateEnd._text}</div>
                )}
              </div>
              <div className='venue'>
                <div>{event.Venue.Type._text}: {event.Venue.Name._text}</div>
                <div>{event.Venue.Phone._text}</div>
                <div className='address' dangerouslySetInnerHTML={{__html:styleAddresses(event.Venue.Address._text)}} />
                <div>opens: {event.Venue.OpeningHour._text}</div>
                <div>closes: {event.Venue.ClosingHour._text}</div>
              </div>
            </div>
          </div>
          <hr />
          <div className='description' dangerouslySetInnerHTML={{__html: event.Description._cdata}} />
        </div>
      )}
    </div>
  )
}
