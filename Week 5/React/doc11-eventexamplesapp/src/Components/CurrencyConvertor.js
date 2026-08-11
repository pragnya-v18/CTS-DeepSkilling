import React, { Component } from 'react';

const INR_TO_EUR = 0.011;

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = { inr: '', eur: '' };
  }

  convert(e) {
    const inr = parseFloat(e.target.value) || 0;
    this.setState({ inr: e.target.value, eur: (inr * INR_TO_EUR).toFixed(4) });
  }

  render() {
    return (
      <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
        <h2>Currency Convertor (INR → EUR)</h2>
        <label>
          INR:{' '}
          <input
            type="number"
            value={this.state.inr}
            onChange={(e) => this.convert(e)}
            placeholder="Enter amount in INR"
          />
        </label>
        {this.state.eur && (
          <p>EUR: <strong>{this.state.eur}</strong></p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
