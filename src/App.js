import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BlackJack</h1>
        </header>
        <div className="App-main">
          <div className="Player1">
            <p className="Player1-cards">Player 1 Cards: K 10</p>
            <p className="Player1-score">Player 1 Points: 20</p>
          </div>
          <div className="Player2">
            <p className="Player2-cards">Player 2 Cards: 3 5 7 9</p>
            <p className="Player2-score">Player 2 Points: 24</p>
            <p className="Player2-status">Player 2 lost</p>
          </div>
          <div className="Control">
            <p className="Last-action">Player 1 got a 10</p>
            <p className="Turn">Player 2's Turn</p>
            <button>Take Card</button>
            <button>Stop</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
