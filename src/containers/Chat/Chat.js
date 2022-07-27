import React from 'react'
import Message from '../../components/Message/MEssage'
import './Chat.css'

const Chat = () => {
  return (
    <div className="chatRoot">
      <Message class="ownerMessage" content="message1" />
      <Message class="ownerMessage" content="message2" />
      <Message class="comingMessage" content="message3" />
      <Message class="ownerMessage" content="message4" />
      <Message class="comingMessage" content="message5" />
    </div>
  )
}

export default Chat
