import React, { Component } from 'react';
import Form from './set_name_form';

class SetName extends Component {
  handleSetName = ({name}) => {
    localStorage.setItem('chat-name', name);

    this.props.history.push('/chat');
  }

  render() {
    return (
      <div>
        <h1 className="center">Enter your name</h1>
        <Form onSubmit={this.handleSetName} />
      </div>
    );
  }
}

export default SetName;
