import React from "react";

export const Button = ({text, clicked, isActive, color}) => {
    
    const styleActive = isActive ? {
            boxShadow: "0 0 15px " + color,
            border: '2px solid ' + color
        }
        : null ;

    const btnClass = `btn ${isActive ? 'btn-active' : ''}`;

    return (<div style={ styleActive } className={btnClass} onClick={clicked}>{text}</div>)
}
