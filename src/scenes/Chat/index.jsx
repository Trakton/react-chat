import React from 'react';
import io from 'socket.io-client';
import MessagesContainer from './components/Messages/index';
import Input from './components/Input/index';
import { connect } from 'react-redux';
import * as messagesActionCreators from './data/messages/actions';
import './styles.css';

var server = process.env.NODE_ENV === 'production' ? 'https://luthier-chat-server.herokuapp.com' : 'http://localhost:3000'

class Chat extends React.Component {
  constructor(props){
    super(props);
    this.checkLogin();
    this.socket = io(server).connect()
    this.socket.on('server:message', message => {
      this.addMessage(message);
    });
  }

  checkLogin(){
    if(this.props.username === ' ')
      window.location.href = '/login';
  }

  sendHandler = content => {
    const message = {
      username: this.props.username,
      content
    };
    this.socket.emit('client:message', message);
    message.fromMe = true;
    this.addMessage(message);
  }

  addMessage(message){
    this.props.dispatch(messagesActionCreators.add(message.username, message.content, message.fromMe));
  }

  render() {
    return(
      <div className="container">
        <h3>React Messenger</h3>
        <MessagesContainer />
        <Input onSend={this.sendHandler}/>
      </div>
    );
  }
}

Chat = connect()(Chat);
export default Chat;
