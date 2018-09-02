import React from 'react';
import {shallow} from 'enzyme';
import Shout from './../components/Shoutbox/Shout';

it('renders without crashing', () => {
  const wrapper = shallow(<Shout text='example text' url='some url' displayname='some displayname' />);
});
