import './styles.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ChatApp from './Chat/index.js';
import Sign from './Sign/index.js';

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
    return(
      <Switch>
        <Route exact path='/login' render={(props) => (<Sign usernameChangedHandler={this.usernameChangedHandler} loginHandler={this.loginHandler}/>)}/>
        <Route exact path='/' render={(props) => (<ChatApp username={this.state.username}/>)}/>
      </Switch>
    );
  }
}

export default App;
