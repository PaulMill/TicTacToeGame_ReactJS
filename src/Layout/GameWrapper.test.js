import React from 'react';
import { shallow, mount } from 'enzyme';
import { GameWrapper } from './';
import { Box } from '../UI_Components';
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

    it('set by default 9 empty boxes', () => {
        const boxesList = wrapper.find(Box);
        expect(boxesList).toHaveLength(9);
        expect(boxesList.map(el => el.text())).toEqual(["","","","","","","","",""]);
    })

    it('set X and O on every next click', () => {
        const boxesList = wrapper.find(Box);
        boxesList.at(0).simulate('click');
        boxesList.at(1).simulate('click');
        boxesList.at(2).simulate('click');
        boxesList.at(3).simulate('click');
        expect(boxesList.map(b => b.text())).toEqual(["X","O","X","O","","","","",""]);
    })
})