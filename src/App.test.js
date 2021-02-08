import React from 'react';
import App from './App';
import { PageHeader } from './Layout';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('renders without crash', () => {
    const appWrapper = shallow(<App />)
  })

  it('renders a page header component', () => {
    const appWrapper = shallow(<App />);
    const pageHeaderList = appWrapper.find(PageHeader);

    expect(pageHeaderList).toHaveLength(1);
  })
});
