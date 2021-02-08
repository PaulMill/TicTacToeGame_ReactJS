import React from 'react';
import { shallow } from 'enzyme';
import { Sign } from './';

describe('Sign component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Sign char={"O"}/>);
    })

    it('component renders correctly', () => {
        expect(wrapper).not.toBeNull();
    })
    
})