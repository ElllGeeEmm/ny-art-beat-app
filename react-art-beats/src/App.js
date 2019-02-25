import React, { Component } from 'react';
import { getEvents } from './services/artBeatHelpers'



class App extends Component {

  async componentDidMount(){
    const events = await getEvents();
    console.log(events);
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
