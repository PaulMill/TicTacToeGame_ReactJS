import React from 'react';
import { shallow, mount } from 'enzyme';
import { Box } from './';

describe('GameWrapper component', () => {
    const mockOneBoxData = {id: 0, selected: false, selection: "", isWinning: false}
    const props = { boxElement: mockOneBoxData, clicked: jest.fn() }
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Box {...props}/>);
    })

    it('component renders correctly', () => {
        expect(wrapper).not.toBeNull();
    })
})