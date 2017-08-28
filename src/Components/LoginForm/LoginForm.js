import React from 'react';
import {Link} from 'react-router-dom';
import './LoginForm.css';

class LoginForm extends React.Component{
  render(){
      return(
        <form onSubmit={this.props.loginHandler} className="username-container">
          <h1>React Messenger</h1>
          <div>
            <input
              type="text"
              onChange={this.props.usernameChangedHandler}
              placeholder="Username"
              required/>
          </div>
          <Link to={{pathname: '/'}}><input type="submit" value="Login"/></Link>
        </form>
      );
  }
}

export default LoginForm;
