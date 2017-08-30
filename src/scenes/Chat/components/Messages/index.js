import React from 'react';
import Message from './components/Message/index.js';

class Messages extends React.Component {
  componentDidUpdate(){
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    const messages = this.props.messages.map((message, i) => {
      return(
        <Message
          key={i}
          username={message.username}
          message={message.message}
          fromMe={message.fromMe}/>
      );
    });
    return(
      <div className='messages' id='messageList'>
        {messages}
      </div>
    );
  }
}

export default Messages;