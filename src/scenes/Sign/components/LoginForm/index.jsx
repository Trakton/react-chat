import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActionCreators from '../../../../data/user/actions';
import './styles.css';

class LoginForm extends React.Component{
  submitHandler = event => {
    event.preventDefault();
    this.props.login(this.input.value);
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
          <Link to="/"><input type="submit" value="Login"/></Link>
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

export default LoginForm;
