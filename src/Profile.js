import React, { Component } from 'react';
import firebase from 'firebase';
import './profile.css';

class Profile extends Component{

	signOut(){
	   firebase.auth().signOut().then(() => {
	     console.log('deslogado')
	   }).catch(function(error) {
	     console.log(error)
	   });
	}

	render(){

		return (

			<div className="col-lg-12 col-sm-12 card-main">
			    <div className="card hovercard">
			        <div className="card-background">
			            <img className="card-bkimg" alt="" src="http://literaria.esy.es/imagens/background.jpg" />
			  
			        </div>
			        <div className="useravatar">
			            <img alt={this.props.user.displayName} src={this.props.user.photoURL}/>
			        </div>
			        <div className="card-info"> <span className="card-title">{this.props.user.displayName}</span>

			        </div>
			    </div>	    
			</div>
	    )
	}
}

export default Profile;