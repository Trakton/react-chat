import React from 'react'
import './LoginForm.css'

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
          <input type="submit" value="Login"/>
        </form>
      );
  }
}

export default LoginForm;
