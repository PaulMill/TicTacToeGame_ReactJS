import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './';

describe('PlayerResult component', () => {
    const props = { text: "RESET", clicked: jest.fn(), isActive: false, color: "#ccc" }
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Button {...props}/>);
    })

    it('component renders correctly', () => {
        expect(wrapper).not.toBeNull();
    })
})