import { 
    GRID_3X3 as initGrid, 
    WINNING_PLAYER as initScore, 
    getChar, 
    checkIfWon, 
    addScore, 
    resetWonScore, 
    checkIfTies  
} from './';

describe('Utility functions', () => {
    const mockWinningGrid = [
        {id: 0, selected: true, selection: "X", isWinning: false},
        {id: 1, selected: false, selection: "", isWinning: false},
        {id: 2, selected: false, selection: "", isWinning: false},
        {id: 3, selected: false, selection: "", isWinning: false},
        {id: 4, selected: true, selection: "X", isWinning: false},
        {id: 5, selected: false, selection: "", isWinning: false},
        {id: 6, selected: false, selection: "", isWinning: false},
        {id: 7, selected: false, selection: "", isWinning: false},
        {id: 8, selected: true, selection: "X", isWinning: false},
    ];
    const mockTiesGrid = [
        {id: 0, selected: true, selection: "O", isWinning: false},
        {id: 1, selected: true, selection: "X", isWinning: false},
        {id: 2, selected: true, selection: "X", isWinning: false},
        {id: 3, selected: true, selection: "X", isWinning: false},
        {id: 4, selected: true, selection: "X", isWinning: false},
        {id: 5, selected: true, selection: "O", isWinning: false},
        {id: 6, selected: true, selection: "O", isWinning: false},
        {id: 7, selected: true, selection: "O", isWinning: false},
        {id: 8, selected: true, selection: "X", isWinning: false},
    ];

    it('getChar pass odd number return X and even numbers return O', () => {
        expect(getChar(2)).toEqual('X');
        expect(getChar(1)).toEqual('O');
        expect(getChar("2")).toEqual('X');
        expect(getChar("1")).toEqual('O');
    })
    it('check if crashed getChar function if not correct data type value', () => {
        expect(getChar({})).toEqual("O");
    })

    it('check function checkIfWon pass grids', () => {
        expect(checkIfWon(mockWinningGrid)).toEqual(['X', [0, 4, 8]]);
        expect(checkIfWon(mockTiesGrid)).toEqual([null, null]);
    })
    
})