import React, { Component } from 'react';
import './App.css';
import Event from './Event'

class App extends Component {
  constructor() {
    super()
    this.nextId = 1
    this.state = {
      user: 'guest',
      loggedIn: false,
      totalLogins: 0,
      events: [],
    }
  }
  login = () => {
    const event = { id: this.nextId++, timestamp: new Date(), action: this.state.loggedIn ? 'logout' : 'login' }
    const newEvents = [...this.state.events, event]
    // newEvents.push(event)

    if (this.state.loggedIn) {
      this.setState({
        user: 'guest',
        loggedIn: false,
        events: newEvents
      })
    } else {
      this.setState(state => ({
        user: 'admin',
        loggedIn: true,
        events: newEvents,
        totalLogins: state.totalLogins + 1
      }))
    }
  }
  render() {
    return (
      <div className="App">
        <p>Hello, {this.state.user}</p>
        <p>You have logged in {this.state.totalLogins} times.</p>
        <button onClick={this.login}>Log {this.state.loggedIn ? 'out' : 'in'}</button>
        {this.state.events.map(e => <Event action={e.action} timestamp={e.timestamp} id={e.id} />)}
      </div>
    );
  }
}

export default App;
