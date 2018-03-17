import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />', () => {

 const base = {
 	syncState: jest.fn()
 }	

 it('renders without crashing', () => {
 	const wrapper = shallow(<App base={base} />);
 	expect(wrapper.length).toBe(1);
 })

 it('should have a container class', () => {
 	const wrapper = shallow(<App base={base} />);
 	expect(wrapper.is('.container')).toBe(true);
 })

 it('should comments', () => {
 	const wrapper = shallow(<App base={base} />);
 	expect(wrapper.find('Comments').length).toBe(1);
 })

 it('should NewComment', () => {
 	const wrapper = shallow(<App base={base} />);
 	expect(wrapper.find('NewComment').length).toBe(1);
 })

 it('Adds new comment when is postNewComments is called', async() => {
 	const wrapper = mount(<App base={base} />)
 	await wrapper.instance().postNewComment({comment: 'test1'})
 	await wrapper.instance().postNewComment({comment: 'test2'})
 	await wrapper.instance().postNewComment({comment: 'test3'})
 	const comments = Object.keys(wrapper.instance().state.comments)
 	console.log(wrapper.instance().state)
 	expect(comments.length).toBe(3)
 })

});
