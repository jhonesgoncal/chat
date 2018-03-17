import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import NewComment from './NewComment';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<NewComment />', () => {
 const postNewCommentMock = jest.fn();

 it('renders without crashing', () => {
 	const wrapper = shallow(<NewComment postNewComment={postNewCommentMock} />);
 	expect(wrapper.length).toBe(1);
 })

 it('handler enter', () => {
 	const wrapper = mount(<NewComment postNewComment={postNewCommentMock} />);
 	const eventMock = {
 		keyCode: 13,
 		preventDefault: jest.fn()
 	}
 	wrapper.instance().refs.comment.value = 'test';
 	wrapper.instance().handleEnter(eventMock);
 	expect(eventMock.preventDefault.mock.calls.length).toBe(1);
 	expect(postNewCommentMock.mock.calls.length).toBe(1);
 	expect(postNewCommentMock.mock.calls[0][0].comment).toBe('test');
 	expect(wrapper.instance().refs.comment.value).toBe('');
 })

});
