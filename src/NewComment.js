import React, { Component } from 'react';

class NewComment extends Component{

	constructor(props){
		super(props);

		this.handleEnter = this.handleEnter.bind(this);
	}

	handleEnter(event){
		if(event.keyCode === 13){
			event.preventDefault();
			this.props.postNewComment({
				comment: this.refs.comment.value
			});

			this.refs.comment.value = ''
		}
	}

	render(){
		return (
			<div>
                <div className="msj-rta macro">                        
                    <div className="text text-r">
                          <input className="mytext" placeholder="Digite aqui..." onKeyDown={this.handleEnter} ref="comment"/>
                    </div> 

                </div>
                 <div>
                      <span className="glyphicon glyphicon-share-alt" aria-hidden="true"></span>
                  </div>                
            </div>

		)
	}
}

export default NewComment;

  