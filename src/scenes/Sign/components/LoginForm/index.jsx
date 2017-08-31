import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as userActionCreators from '../../../../data/user/actions';
import './styles.css';

class LoginForm extends React.Component{
  submitHandler = event => {
    event.preventDefault();
    this.props.login(this.input.value);
    this.props.history.push('/');
  }
  render(){
      return(
        <form onSubmit={this.submitHandler} className="username-container">
          <h1>React Messenger</h1>
          <div>
            <input
              type="text"
              placeholder="Username"
              ref={(element) => { this.input = element }}
              required/>
          </div>
         <input type="submit" value="Login"/>
        </form>
      );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login(username){
    dispatch(userActionCreators.login(username));
  },
});

LoginForm = connect(null, mapDispatchToProps)(LoginForm);
LoginForm = withRouter(LoginForm);

export default LoginForm;
