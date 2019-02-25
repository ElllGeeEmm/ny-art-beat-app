import React from 'react'

export default (props) => {
  const { event } = props;
  return(
    <div className='event-container'>
      <h2>{event.Name._text}</h2>
      <div className='expand-container'>
        <div>Showing until: {event.DateEnd._text}</div>
        <div>Showing at: {event.Venue.Address._text}</div>
        <div>cost: {event.Price._text}</div>
      </div>
    </div>
  );
};
