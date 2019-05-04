import React from 'react';
import { shallow } from 'enzyme';

import Welcome from './';

describe('<Theme />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<Welcome />);
    expect(renderedComponent.length).toEqual(1);
  });
});
