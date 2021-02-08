import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent, getByTestId} from "@testing-library/react";
import { GameArea, GameWrapper } from './';
import { WINNING_PLAYER as initScore } from '../utils';

describe('GameArea component', () => {
    const propsGame = { score: initScore, setScore: jest.fn(), resetGrid: false, setResetGrid: jest.fn(), setRoundEnds: jest.fn() }
    let gameAreaWrapper;

    beforeAll(() => {
        gameAreaWrapper = shallow(<GameArea {...propsGame} />);
    });

    it('Should render GameWrapper component', () => {
        const gameWrapperList = gameAreaWrapper.find(GameWrapper);
        expect(gameWrapperList).toBeTruthy();
    });
});