import React from 'react'
import Message from '../../components/Message/MEssage'
import './Chat.css'

const Chat = () => {
  return (
    <div className="chatRoot">
      <Message coming={false} content="message1" />
      <Message coming={false} content="message2" />
      <Message coming={true} content="message3" />
      <Message coming={false} content="message4" />
      <Message coming={true} content="message5" />
    </div>
  )
}

export default Chat
