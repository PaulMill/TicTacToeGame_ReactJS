import React from 'react';
import { Button, PlayerResult } from '../UI_Components';

export const GameControlsWrapper = ({ score, setScore, setNewRound, roundEnds }) => {

    const resetClicked = () => {
        // to do reset button
        const newScore = {...score};
        for(const key in newScore) {
            newScore[key] = {score: 0, isWon: false};
        }
        setScore(newScore);
        setNewRound(true);
    }

    return (
        <div className="game-controls">
            <Button text={'RESET RESULTS'} clicked={resetClicked} isActive={roundEnds} color={'#9500ffb6'}/>
            <PlayerResult textPlayer={'PLAYER (X)'} score={score.X.score} isWon={score.X.isWon} />
            <PlayerResult textPlayer={'TIES'} score={score.T.score} isWon={score.T.isWon} />
            <PlayerResult textPlayer={'PLAYER (O)'} score={score.O.score} isWon={score.O.isWon} />
            <Button text={'NEW ROUND'} clicked={() => setNewRound(true)} isActive={roundEnds} color={'#7ed200c2'}/>
        </div>
    )
}