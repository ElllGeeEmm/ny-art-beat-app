import React, { Component } from 'react'
import plusIcon from '../assets/plusIcon.png'
import minusIcon from '../assets/minusIcon.png'

class ListItem extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      collapsed: true
    };
  };

  handleClick(){
    this.setState(prevState =>({
      collapsed: !prevState.collapsed
    }))
  }

  toggleHeight() {
    return this.state.collapsed ? 'none' : 'block';
  }

  toggleIcon() {
    return this.state.collapsed ? plusIcon : minusIcon;
  }

  render(){
    const { event } = this.props;
    const styleObj = {
      display: this.toggleHeight()
    }
    console.log(styleObj);
    return(
      <div className='event-container'>
        <div className='list-item-header'>
          <div className='icon-holder' onClick={this.handleClick}>
            <img src={this.toggleIcon()} className='icon' />
          </div>
          <h2>{event.Name._text}</h2>
        </div>
        <div className='expand-container' style={styleObj}>
          <div>Showing until: {event.DateEnd._text}</div>
          <div>Showing at: {event.Venue.Address._text}</div>
          <div>cost: {event.Price._text}</div>
        </div>
      </div>
    );
  };
};

export default ListItem
