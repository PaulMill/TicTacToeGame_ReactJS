import React from 'react';
import { shallow } from 'enzyme';
import { PlayerResult } from './';

describe('PlayerResult component', () => {
    const props = {textPlayer: "Player (X)", score: 1, isWon: false}
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<PlayerResult {...props}/>);
    })

    it('component renders correctly', () => {
        expect(wrapper).not.toBeNull();
    })

    it('check to set correctly text of player', () => {
        expect(wrapper.find('.player').text()).toEqual("Player (X)")
    })
})