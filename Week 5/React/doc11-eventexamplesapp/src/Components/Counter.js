import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment() {
    this.setState(prev => ({ count: prev.count + 1 }));
  }

  decrement() {
    this.setState(prev => ({ count: prev.count - 1 }));
  }

  reset() {
    this.setState({ count: 0 });
  }

  handleMultiple(e) {
    // multiple method calls on one button via synthetic event
    console.log('Synthetic event type:', e.type);
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8, marginBottom: 20 }}>
        <h2>Counter</h2>
        <p style={{ fontSize: 32 }}>{this.state.count}</p>
        <button onClick={() => this.increment()}>Increment</button>{' '}
        <button onClick={() => this.decrement()}>Decrement</button>{' '}
        <button onClick={() => this.reset()}>Reset</button>{' '}
        {/* Multiple methods on one button + synthetic event */}
        <button onClick={(e) => this.handleMultiple(e)}>+2 (Multi-method)</button>
      </div>
    );
  }
}

export default Counter;
