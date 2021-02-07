import React from 'react';

export const PlayerResult = ({textPlayer, score, isWon}) => {
    const textClass = `player-result-wrapper ${isWon ? 'player-won' : ''}`;
    return (
        <div className={textClass}>
            <p className="player">{textPlayer}</p>
            <p className="score">{score}</p>
          </div>
    )
}