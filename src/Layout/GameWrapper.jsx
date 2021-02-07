import React, { useState } from 'react';
import { GRID_3X3 } from '../utils';
import { Box } from "../UI_Components";

export const GameWrapper = () => {
    const [grid, setGrid] = useState(GRID_3X3);

    
    const clickHandler = (clickedEl) => {
        if(clickedEl.selected) return; // if already clicked ignore click

       // to do implement click on box
    }

    return (
        <ul className="game-wrapper" >
            {grid.map(box => (<Box key={box.id} boxElement={box} clicked={clickHandler}/>))}
        </ul>
    )
}