import React from 'react';
import { Sign } from './';

export const Box = ({ boxElement, clicked }) => {

    return (
        <li className="box" onClick={() => clicked(boxElement)}>
            <Sign char={boxElement.selection} />
        </li>
    )
}