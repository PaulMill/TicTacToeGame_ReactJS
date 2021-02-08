import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './';

describe('Button component', () => {
    const props = { text: "RESET", clicked: jest.fn(), isActive: false, color: "#ccc" }
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Button {...props}/>);
    })

    it('component renders correctly', () => {
        expect(wrapper).not.toBeNull();
    })

    it('check if class applied once set isActive ', () => {
        wrapper.setProps({ text: "RESET", clicked: jest.fn(), isActive: true, color: "#ccc" });
        expect(wrapper.find('.btn-active')).toHaveLength(1);
    })
})