import { getChar, checkIfWon, addScore, resetWonScore, checkIfTies } from './';

describe('Utility functions', () => {

    it('getChar pass odd number return X and even numbers return O', () => {
        expect(getChar(2)).toEqual('X');
        expect(getChar(1)).toEqual('O');
        expect(getChar("2")).toEqual('X');
        expect(getChar("1")).toEqual('O');
    })

    it('check if crashed getChar function if not correct data type value', () => {
        expect(getChar({})).toEqual('X');
    })
    
})