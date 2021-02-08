import React from 'react';
import { shallow, mount } from 'enzyme';
import { GameWrapper } from './';
import { WINNING_PLAYER as initScore } from '../utils';

describe('GameWrapper component', () => {
    const props = { score: initScore, setScore: jest.fn(), resetGrid: false, setResetGrid: jest.fn(), setRoundEnds: jest.fn() }

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<GameWrapper {...props}/>)
    })

    it('component renders correctly', () => {
        expect(wrapper).not.toBeNull();
    })
})