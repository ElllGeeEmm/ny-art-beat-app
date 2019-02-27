import React, { Component } from 'react';
import { getEvents } from './services/artBeatHelpers';
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {
  constructor(){
    super();

    this.handleNavClick = this.handleNavClick.bind(this)

    this.state = {
      events: [],
      event: null,
      media: ''
    };
  };

  async handleNavClick(e){
    console.log(e.target);
    const { value } = e.target;

    const resp = await getEvents(value);
    const events = resp.Events.Event;
    this.setState({
      events
   })
 }

  async componentDidMount(){
    const resp = await getEvents('print_painting');
    const events = resp.Events.Event;
    this.setState({
      events
    })
  }

  render() {
    const { events } = this.state;
    console.log(events);
    return (
      <div className="App">
        <Header handleNavClick={this.handleNavClick} />
        <Main events={events}/>
        <Footer />
      </div>
    );
  }
}

export default App;
