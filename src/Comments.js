import React, { Component } from 'react';

import Comment from './Comment';
import './app.css'

class Comments extends Component{

	renderComment(key, comment) {
		if(comment.user){
			return (
			  <Comment key={key} comment={comment} />
			)
		}
	}

	render(){
		return(
				<ul id="options-holder">
					{ Object.keys(this.props.comments).map(key => 
						this.renderComment(key, this.props.comments[key])
					)}
				</ul>
		)
	}

}

export default Comments;