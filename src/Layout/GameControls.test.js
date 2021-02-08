import React from 'react';
import { mount } from 'enzyme';
import { GameControlsWrapper } from './';
import { WINNING_PLAYER as initScore } from '../utils';

describe('GameControlsWrapper component', () => {
    const props = { score: initScore, setScore: jest.fn(), setNewRound: jest.fn(), roundEnds: false }
    
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<GameControlsWrapper {...props}/>);
    })

    it('component renders correctly', () => {
        expect(wrapper).not.toBeNull();
    })
})