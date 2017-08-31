import React from 'react';
import Message from './components/Message/index';
import { connect } from 'react-redux';
import { add } from '../../data/messages/actions';

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
          content={message.content}
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

const mapStateToProps = state => {
  return { messages: state.chat.data.messages };
}

const MessagesContainer = connect(
  mapStateToProps
)(Messages);

export default MessagesContainer;
