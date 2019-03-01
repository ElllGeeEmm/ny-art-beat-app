import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import plusIcon from '../assets/plusIcon.png'
import minusIcon from '../assets/minusIcon.png'
import { styleAddresses } from '../services/artBeatHelpers'

class ListItem extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      collapsed: true
    };
  };

  handleClick(){
    this.setState(prevState =>({
      collapsed: !prevState.collapsed
    }));
  };

  toggleHeight() {
    return this.state.collapsed ? 'none' : 'block';
  };

  toggleIcon() {
    return this.state.collapsed ? plusIcon : minusIcon;
  };

  render(){
    const { event } = this.props;

    const styleObj = {
      display: this.toggleHeight()
    };
    return(
      <div className='event-container'>
        <div className='list-item-header'>
          <div className='icon-holder' onClick={this.handleClick}>
            <img src={this.toggleIcon()} className='icon' alt='icon'/>
          </div>
          <Link className='list-item-header-link' to={`/eventList/${this.props.match.params.eventType}/eventDetail/${event._attributes.id}`}>
            <h2>{event.Name._text}</h2>
            <div className='img-holder'>
              <img src={event.Image[1]._attributes.src} alt='poster'/>
            </div>
          </Link>
        </div>
        <div className='expand-container' style={styleObj}>
          <div>
            <span className='key'>cost: </span>
            <span className='space'/>
            <span className='value'> {event.Price._text}</span>
          </div>
          <div>
            <span className='key'>Closing Date: </span>
            <span className='space'/>
            <span className='value'>
              {event.DateEnd._text === '0000-00-00' ? (
                <div>Permanent Installation</div>
              ) : (
                <div>Ends: {event.DateEnd._text}</div>
              )}
            </span>
          </div>
          <div>
            <span className='key'>Venue: </span>
            <span className='space'/>
            <div className='value' dangerouslySetInnerHTML={{__html:styleAddresses(event.Venue.Address._text)}} />
          </div>
          <Link to={`/eventList/${this.props.match.params.eventType}/eventDetail/${event._attributes.id}`}>Details</Link>
        </div>
      </div>
    );
  };
};

export default ListItem
