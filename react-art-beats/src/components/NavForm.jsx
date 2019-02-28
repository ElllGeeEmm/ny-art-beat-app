import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import plusIcon from '../assets/plusIcon.png'
import minusIcon from '../assets/minusIcon.png'

export default (props) => {
  const { handleNavClick } = props;
  return(
    <div className='dropdown'>
      <button className='dropbtn'>Find Events</button>
      <div className='dropdown-content'>
        <Link to='/EventList/event_type_print_painting'>
          <button className='mediabtn' value='event_type_print_painting' onClick={handleNavClick}>
            Painting
          </button>
        </Link>
        <Link to='/EventList/event_type_print_drawing'>
          <button className='mediabtn' value='event_type_print_drawing' onClick={handleNavClick}>
            Drawing
          </button>
        </Link>
        <Link to='/EventList/event_type_3D_sculpture'>
          <button className='mediabtn' value='event_type_3D_sculpture' onClick={handleNavClick}>
            Sculpture
          </button>
        </Link>
        <Link to='/EventList/event_type_screen_film'>
          <button className='mediabtn' value='event_type_screen_film' onClick={handleNavClick}>
            Film
          </button>
        </Link>
        <Link to='/EventList/event_type_misc_performance'>
          <button className='mediabtn' value='event_type_misc_performance' onClick={handleNavClick}>
            Performance
          </button>
        </Link>
      </div>
    </div>
  );
};
