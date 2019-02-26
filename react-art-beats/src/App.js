import React, { Component } from 'react';
import { getEvents } from './services/artBeatHelpers';
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {
  constructor(){
    super();

    this.state = {
      events: []
    };
  };

  async componentDidMount(){
    const resp = await getEvents();
    const events = resp.Events.Event;
    this.setState({
      events
    })
  }

  handleExpandClick(ev){

  }

  render() {
    const { events } = this.state;
    return (
      <div className="App">
        <Header />
        <Main events={events}/>
        <Footer />
      </div>
    );
  }
}

export default App;
