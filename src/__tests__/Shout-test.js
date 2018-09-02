import React from 'react';
import {shallow} from 'enzyme';

import Sending from './../components/Shoutbox/Shout';

  it('renders SENDING without crashing', () => {
    shallow(<Sending/>);
  })
  it('SENDING has 2 inputs', () => {
    const wrapper = shallow(<Sending/>);
    expect(wrapper.find('input').length).toBe(2);
  })
})
