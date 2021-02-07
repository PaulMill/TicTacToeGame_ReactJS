import React from 'react';
import { Sign } from './';

export const Box = ({ boxElement, clicked }) => {
    
    const boxClassName = `box ${boxElement.isWinning ? 'box-won' : ''}`

    return (
        <li className={boxClassName} onClick={() => clicked(boxElement)}>
            <Sign char={boxElement.selection} />
        </li>
    )
}