import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent, getByTestId} from "@testing-library/react";
import { GameArea, GameWrapper, GameControlsWrapper } from './';
import { WINNING_PLAYER as initScore } from '../utils';

describe('GameArea component', () => {
    let gameAreaWrapper;

    beforeAll(() => {
        gameAreaWrapper = shallow(<GameArea />);
    });

    it('Should render GameWrapper component', () => {
        const gameWrapperList = gameAreaWrapper.find(GameWrapper);
        expect(gameWrapperList).toBeTruthy();
    });

    it('Should render GameControlsWrapper component', () => {
        const gameControlList = gameAreaWrapper.find(GameControlsWrapper);
        expect(gameControlList).toBeTruthy();
    });
});