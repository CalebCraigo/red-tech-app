import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Body from '../components/Body.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Body component', () => {
    test('renders', () => {
        const wrapper = shallow(<Body />);

        expect(wrapper.exists()).toBe(true);
    })
});