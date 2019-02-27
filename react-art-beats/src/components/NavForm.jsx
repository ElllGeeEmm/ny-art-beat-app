import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import plusIcon from '../assets/plusIcon.png'
import minusIcon from '../assets/minusIcon.png'

class NavForm extends Component {
  constructor(props){
    super(props);

    this.handleExpand = this.handleExpand.bind(this);

    this.state = {
      collapsed: true
    };
  };

  handleExpand(){
    this.setState(prevState =>({
      collapsed: !prevState.collapsed
    }));
  };

  toggleNav(){
    return this.state.collapsed ? 'none' : 'block'
  }

  render(){
    const { handleNavClick } = this.props;
    const styleObj = {
      display: this.toggleNav()
    };
    return(
      <div className='nav-container'>
        <button onClick={this.handleExpand}>Find Events</button>
        <div className='nav-collapse' style={styleObj}>
          <Link to='/EventList'><button value='print_painting' onClick={handleNavClick}>Painting</button></Link>
          <Link to='/EventList'><button value='print_drawing' onClick={handleNavClick}>Drawing</button></Link>
          <Link to='/EventList'><button value='3D_sculpture' onClick={handleNavClick}>Sculpture</button></Link>
          <Link to='/EventList'><button value='screen_film' onClick={handleNavClick}>Film</button></Link>
          <Link to='/EventList'><button value='misc_performance' onClick={handleNavClick}>Performance</button></Link>
        </div>
      </div>
    );
  };
};

export default NavForm
