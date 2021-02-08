import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('renders without crash', () => {
    const appWrapper = shallow(<App />)
  })
});
