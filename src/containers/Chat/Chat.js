import React from 'react'
import Message from '../../components/Message/Message'
import CustomInput from '../../components/CustomInput/CustomInput'
import './Chat.css'

const Chat = () => {
  return (
    <div className="chatRoot">
      <Message coming={false} content="message1" />
      <Message
        coming={false}
        content="a very long version of the prior short message 2"
      />
      <Message coming={true} content="message3" />
      <Message coming={false} content="message that is medium" />
      <Message coming={true} content="message5" />
      <CustomInput />
    </div>
  )
}

export default Chat
