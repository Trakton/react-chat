
//var config = require('../config/index.js');
import React from 'react';
//import io from 'socket.io-client';
import Messages from '../Messages/Messages';
import ChatInput from '../ChatInput/ChatInput';
import './ChatApp.css'

class ChatApp extends React.Component {
  constructor(props){
    super(props);
    this.state = { messages: [] };
   // this.socket = io(config.exports.api).connect()
    this.sendHandler = this.sendHandler.bind(this);
    this.addMessage = this.addMessage.bind(this);
    ///this.socket.on('server:message', message => {
    ///  this.addMessage(message);
   // });
  }

  sendHandler(message){
    const messageObject = {
      username: this.props.username,
      message
    };

   // this.socket.emit('client:message', messageObject);
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

ChatApp.defaultProps = {
  username: 'Anonymous'
};

export default ChatApp;
