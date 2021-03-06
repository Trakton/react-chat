import React from 'react';

class Input extends React.Component {
  constructor(props){
    super(props);
    this.state = { chatInput: ''};
  }

  typingHandler = event => {
    this.setState({ chatInput: event.target.value });
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.onSend(this.state.chatInput);
    this.setState({ chatInput: ' ' });
  }

  render() {
    return(
      <form className="chat-input" onSubmit={this.submitHandler}>
        <input
          type="text"
          onChange={this.typingHandler}
          value={this.state.chatInput}
          placeholder="Write a message..."
          required/>
      </form>
    );
  }
}

export default Input;
