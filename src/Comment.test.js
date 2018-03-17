import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Comment from './Comment';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Comment />', () => {

 it('renders without crashing', () => {
 	const comment = {
 		comment: 'test'
 	}
 	const wrapper = shallow(<Comment comment={comment} />);
 	expect(wrapper.length).toBe(1);
 	expect(wrapper.is('.alert')).toBe(true);
 	expect(wrapper.text()).toBe('test');
 })

 

});
