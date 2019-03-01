import React from 'react';
import ListItem from './ListItem';

export default (props) => {
  const { events, setEvents } = props;
  setEvents(events, props.match.params.eventType);
  return(
    <div>
      {events && events.map(event => (
        <ListItem {...props} key={event._attributes.id} event={event} />
      ))}
    </div>
  );
};
