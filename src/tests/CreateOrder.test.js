import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import CreateOrder from '../components/CreateOrder.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('CreateOrder component', () => {
    test('renders', () => {
        const wrapper = shallow(<CreateOrder open={true}/>);

        expect(wrapper.exists()).toBe(true);
    })
});