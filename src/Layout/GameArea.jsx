import React, { useState} from 'react';
import { GameWrapper, GameControlsWrapper } from './';
import { WINNING_PLAYER } from '../utils'

export const GameArea = () => {
    const [score, setScore] = useState(WINNING_PLAYER);

    return (
        <section className="game-area">
            <GameWrapper />
            <GameControlsWrapper score={score} />
        </section>
    )
}