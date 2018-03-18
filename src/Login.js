import React, { Component } from 'react';
import './login.css';

class Login extends Component{

	render(){
		return (
			<div>
	            <div className="container">
	              <div className="row">
				        <div className="col-sm-6 col-md-4 col-md-offset-4 login">
				            <div className="account-wall">
				                <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
				                    alt="" />
				                <div className="form-signin">
					                <button className="btn btn-lg btn-primary btn-block" onClick={ () => this.props.auth()}>
					                    Entrar com facebook</button>
				                </div>
				            </div>
				        </div>
				    </div>
	            </div>
	        </div>
		)
	}
}

export default Login;