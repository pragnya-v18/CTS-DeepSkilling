import React, { Component } from 'react';
import GuestPage from './Components/GuestPage';
import UserPage from './Components/UserPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    // conditional rendering: login/logout toggle
    return (
      <div style={{ fontFamily: 'Arial' }}>
        <h1 style={{ background: '#0078d7', color: '#fff', padding: 16, margin: 0 }}>
          Ticket Booking App
        </h1>
        {this.state.isLoggedIn
          ? <UserPage onLogout={() => this.setState({ isLoggedIn: false })} />
          : <GuestPage onLogin={() => this.setState({ isLoggedIn: true })} />
        }
      </div>
    );
  }
}

export default App;
