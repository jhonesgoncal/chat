import React from 'react';
import './app.css'


const Comment = props => 

						<li>
	                        <div className="msj macro">
	                        <div className="avatar">
	                        	{ props.comment.user && 
	                        		<img className="img-circle" src={props.comment.user.photo} alt={props.comment.user.name} /> 
	                        	}
	                        </div>
	                            <div className="text text-l"><b>{props.comment.user.name}</b>
	                                <p>{props.comment.comment}</p>
	                                <p className="date"><small>{props.comment.date}</small></p> 
	                            </div>
	                        </div>
	                    </li> 

export default Comment;