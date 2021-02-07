import React from 'react';

export const PlayerResult = ({textPlayer, score, isWon}) => {
    const textClass = `player-result-wrapper ${isWon ? 'player-won' : ''}`;
    const styleWinScore = isWon ? { textShadow: "0 0 1em #e7ffc4" } : null;
    return (
        <div className={textClass}>
            <p className="player">{textPlayer}</p>
            <p style={styleWinScore} className="score">{score}</p>
          </div>
    )
}