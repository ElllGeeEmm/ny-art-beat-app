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
        <Link to='/EventList'>
          <button className='mediabtn' value='print_painting' onClick={handleNavClick}>
            Painting
          </button>
        </Link>
        <Link to='/EventList'>
          <button className='mediabtn' value='print_drawing' onClick={handleNavClick}>
            Drawing
          </button>
        </Link>
        <Link to='/EventList'>
          <button className='mediabtn' value='3D_sculpture' onClick={handleNavClick}>
            Sculpture
          </button>
        </Link>
        <Link to='/EventList'>
          <button className='mediabtn' value='screen_film' onClick={handleNavClick}>
            Film
          </button>
        </Link>
        <Link to='/EventList'>
          <button className='mediabtn' value='misc_performance' onClick={handleNavClick}>
            Performance
          </button>
        </Link>
      </div>
    </div>
  );
};
