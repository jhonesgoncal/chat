import React, { Component } from 'react';
import 'bootstrap-css-only';
import firebase from 'firebase';
import './app.css';
import { animateScroll } from "react-scroll";

//components
import NewComment from './NewComment';
import Comments from './Comments';
import Login from './Login';
import Profile from './Profile';

class App extends Component {

  constructor(props){
    super(props)

    this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      comments: {
        
      },
      isLoggedIn: false,
      user: {}
    }

    this.refComments = this.getComments(); 

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({isLoggedIn: true, user: user})
      }else{
        this.setState({isLoggedIn: false, user: {}})
      }
    })

  }


  scrollToBottom() {
      animateScroll.scrollToBottom({
        containerId: "options-holder"
      });
  }

  postNewComment(comment){
    const date = this.formatAMPM(new Date());
    comment.date = date;
    if(this.state.user){
      comment.user = {
        uid: this.state.user.uid,
        name: this.state.user.displayName,
        photo: this.state.user.photoURL
      }
    }

    const comments = {...this.state.comments}
    let i = Math.round(Math.random() * 10);
    const timestamp= (function(){
                        i++; 
                        return Date.now() + i;
                      })();

    comments[`comm-${timestamp}`] = comment;

    this.setState({
      comments: comments
    }, this.scrollToBottom)
  }

  async getComments(){
    let comments = await this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })
   
    return comments;
  }

  auth(){
    const provider = new firebase.auth.FacebookAuthProvider();
    
    firebase.auth().signInWithPopup(provider).then((result) => {
        const user = result.user;
        this.setState({
          user: user
        })
    })
  }

  formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }  

  render() {
    return (
      <div className="container" >
        { this.state.isLoggedIn && 
          <Profile user={this.state.user} />
        }
        { ( this.state.isLoggedIn && this.state.user ) && 
          <div>
            <div  name="myScrollToElement" className="col-sm-12 col-sm-offset-4 frame element" id="frame">
              <Comments comments={this.state.comments}  app={App}/>
               
              <NewComment postNewComment={this.postNewComment} />
            </div>
          </div>
        }
        { !this.state.isLoggedIn && 
          <Login auth={this.auth} />
        }
        
      </div>
    );
  }

}

export default App;
