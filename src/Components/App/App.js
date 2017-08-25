import './App.css';
import React from 'react';
import ChatApp from '../ChatApp/ChatApp';
import LoginForm from '../LoginForm/LoginForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { submitted: false, username: ' ' };
    this.usernameChangedHandler = this.usernameChangedHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }

  usernameChangedHandler(event){
    this.setState({ username: event.target.value });
  }

  loginHandler(event){
    event.preventDefault();
    this.setState({ submitted: true });
  }

  render() {
    if(this.state.submitted){
      return(
        <ChatApp username={this.state.username}/>
      );
    } else {
      return(
        <LoginForm usernameChangedHandler={this.usernameChangedHandler} loginHandler={this.loginHandler}/>
      );
    }
  }
}

export default App;
