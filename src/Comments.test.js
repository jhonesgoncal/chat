import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Comments from './Comments';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Comments />', () => {

 it('renders without crashing', () => {
 	const comments = {
 		1: {
	 		comment: 'test'
	 	},
	 	2: {
	 		comment: 'test'
	 	}
	}

 	const wrapper = shallow(<Comments comments={comments} />);
 	expect(wrapper.length).toBe(1);
 	expect(wrapper.find('Comment').length).toBe(2);
 	//expect(wrapper.is('.alert')).toBe(true);
 	//expect(wrapper.text()).toBe('test');
 })

 

});
