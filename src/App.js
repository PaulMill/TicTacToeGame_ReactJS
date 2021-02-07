import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>T-T-T Game</h1>
      </header>
      <section className="game-area">
        <ul className="game-wrapper">
          <li className="box"><p className="sign">X</p></li>
          <li className="box"><p className="sign">O</p></li>
          <li className="box">1</li>
          <li className="box">1</li>
          <li className="box">1</li>
          <li className="box">1</li>
          <li className="box">1</li>
          <li className="box">1</li>
          <li className="box">1</li>
        </ul>
        <div className="game-controls">
          <div className="btn">RESET RESULTS</div>
          <div className="player-result-wrapper">
            <p className="player">PLAYER (X)</p>
            <p className="score">0</p>
          </div>
          <div className="player-result-wrapper">
            <p className="player">TIES</p>
            <p className="score">0</p>
          </div>
          <div className="player-result-wrapper">
            <p className="player">PLAYER (O)</p>
            <p className="score">0</p>
          </div>
          <div className="btn">NEW ROUND</div>
        </div>
      </section>
    </div>
  );
}

export default App;
