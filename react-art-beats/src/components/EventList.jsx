import React from 'react'
import ListItem from './ListItem'

export default (props) => {
  const { events } = props;
  return(
    <div>
      {events && events.map(event => (
        <ListItem key={event.Name._text} event={event} />
      ))}
    </div>
  );
};
