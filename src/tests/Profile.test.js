import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Profile from '../components/userProfile';
import ProfileUpdate from '../components/editProfile';

describe('<ProfileUpdate />', () => {
    it('renders input fields', () => {
        const profile = shallow(<Provider><ProfileUpdate /></Provider>);
        expect(profile.find('input').length).toEqual(0);
    })
})