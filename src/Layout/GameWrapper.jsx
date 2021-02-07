import React, { useState, useEffect } from 'react';
import { GRID_3X3, getChar, checkIfWon } from '../utils';
import { Box } from "../UI_Components";

export const GameWrapper = () => {
    const [grid, setGrid] = useState(GRID_3X3);
    const [winningGrid, setWinningGrid] = useState([]);
    const [pointer, setPointer] = useState(0);

    useEffect(() => {
        const [char, comb] = checkIfWon(grid)
        if(char) {
            const newGrid = [...grid];
            newGrid[comb[0]] = {...newGrid[comb[0]], isWinning: true };
            newGrid[comb[1]] = {...newGrid[comb[1]], isWinning: true };
            newGrid[comb[2]] = {...newGrid[comb[2]], isWinning: true };
            setWinningGrid(newGrid);
        }
    }, [grid])
    
    const clickHandler = (clickedEl) => {
        if(clickedEl.selected) return; // if already clicked ignore click

        const char = getChar(pointer);
        const newElement = { id: clickedEl.id, selected: true, selection: char, isWinning: false };

        //update table
        const newGrid = [...grid];
        const index = grid.findIndex((el) => el.id === clickedEl.id);
        newGrid[index] = newElement;

        setGrid(newGrid);
        setPointer(pointer + 1);
    }
    const customStyle = winningGrid.length > 0 ? {pointerEvents: 'none'} : null;

    return (
        <ul className="game-wrapper" style={customStyle}>
            { winningGrid.length > 0 
            ? winningGrid.map(box => (<Box key={box.id} boxElement={box} clicked={clickHandler}/>))
            : grid.map(box => (<Box key={box.id} boxElement={box} clicked={clickHandler}/>))}
        </ul>
    )
}