import { WIN_COMBINATION_3X3 } from './'

export const getChar = (movePoint) => {
    return movePoint % 2 === 0 ? "X" : "O";
}

const check = (arrWin, arrGrid, char) => {
    return arrGrid[arrWin[0]].selection === char 
        && arrGrid[arrWin[1]].selection === char 
        && arrGrid[arrWin[2]].selection === char
}

export const checkIfWon = (grid) => {
    const charX = 'X';
    const charO = 'O';
    let idx = 0;

    while(idx < WIN_COMBINATION_3X3.length) {

        if(check(WIN_COMBINATION_3X3[idx], grid, charX)) {

            return [charX, WIN_COMBINATION_3X3[idx]];
        } else if (check(WIN_COMBINATION_3X3[idx], grid, charO)) {
            
            return [charO, WIN_COMBINATION_3X3[idx]];
        }
        idx++;
    }
    return [null, null]
}