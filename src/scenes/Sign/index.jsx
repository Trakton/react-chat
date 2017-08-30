import React from 'react';
import LoginForm from './components/LoginForm/index'

class Sign extends React.Component{
    render(){
        return(
            <LoginForm usernameChangedHandler={this.props.usernameChangedHandler} loginHandler={this.props.loginHandler}/>
        );
    }
}

export default Sign;