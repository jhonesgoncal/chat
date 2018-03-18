import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Comment from './Comment';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Comment />', () => {

 it('renders without crashing', () => {
 	const comment = {
		 comment: 'test',
		 user:{
			 name:'jhones',
			 photo:'adv'
		 },
		 date: new Date()
	 }
 	const wrapper = shallow(<Comment comment={comment} />);
 	expect(wrapper.length).toBe(1);
 	expect(wrapper.text()).toBe('jhonestest');
 })

 

});
