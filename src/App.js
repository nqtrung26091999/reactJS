import './App.css';
import TrafficLight from './components/TrafficLight';
import React, { Component } from 'react';

const RED = 0;
const GREEN = 1;
const ORANGE = 2;

class App extends Component {

  constructor() {
    super();
    this.state = {
        currentColor: GREEN
    }

    setInterval(() => {
        console.log(this.currentColor);
        this.setState({
            currentColor: this.getNextColor(this.state.currentColor)
        });
    }, 1000);
  }

  getNextColor(color) {
    switch(color) {
        case RED:
            return ORANGE;
        case ORANGE:
            return GREEN;
        default:
            return RED;
    }
  }

  render() {
    const { currentColor } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <TrafficLight currentColor={ currentColor } />
        </header>
      </div>
    );
  }
}

export default App;
