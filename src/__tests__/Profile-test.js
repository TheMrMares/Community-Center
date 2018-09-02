import React from 'react';
import {shallow} from 'enzyme';
import Profile from './../components/Profile/Profile';

describe('Profile', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Profile />);
    });
})
