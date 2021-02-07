import React from 'react';
import { GameWrapper } from './';

export const GameArea = () => {
  return (
    <section className="game-area">
        <GameWrapper />
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
  )
}