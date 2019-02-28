
import React, { Component } from 'react';
import { getEvents } from './services/artBeatHelpers';
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {
  constructor(props){
    super(props);

    this.handleNavClick = this.handleNavClick.bind(this);
    this.setEvents = this.setEvents.bind(this);

    this.state = {
      events: [],
      event: null,
      media: ''
    };
  };

  async handleNavClick(e){
    const { value } = e.target;

    const resp = await getEvents(value);
    const events = resp.Events.Event;
    this.setState({
      events
   });
 };

  async componentDidMount(){
    const resp = await getEvents('event_type_print_painting');
    const events = resp.Events.Event;
    this.setState({
      events
    });
  };

  async setEvents(eventType){
    const resp = await getEvents(eventType);
    const events = resp.Events.Event;
    this.setState({
      events
    });
  }

  render() {
    const { events } = this.state;
    return (
      <div className="App">
        <Header handleNavClick={this.handleNavClick} />
        <Main events={events} setEvents={this.setEvents} />
        <Footer />
      </div>
    );
  };
};

export default App;
