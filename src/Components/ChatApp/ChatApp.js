import React from 'react';
import io from 'socket.io-client';
import Messages from '../Messages/Messages';
import ChatInput from '../ChatInput/ChatInput';
import './ChatApp.css';

var server = process.env.NODE_ENV === 'production' ? 'https://luthier-chat-server.herokuapp.com' : 'http://localhost:3000'

class ChatApp extends React.Component {
  constructor(props){
    super(props);
    this.checkLogin();
    this.state = { messages: [] };
    this.socket = io(server).connect()
    this.sendHandler = this.sendHandler.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.socket.on('server:message', message => {
      this.addMessage(message);
    });
  }

  checkLogin(){
    if(this.props.username === ' ')
      window.location.href = '/login';
  }

  sendHandler(message){
    const messageObject = {
      username: this.props.username,
      message
    };

    this.socket.emit('client:message', messageObject);
    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message){
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return(
      <div className="container">
        <h3>React Messenger</h3>
        <Messages messages={this.state.messages}/>
        <ChatInput onSend={this.sendHandler}/>
      </div>
    );
  }
}

export default ChatApp;
