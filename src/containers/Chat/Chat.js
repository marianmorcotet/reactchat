import React, { useContext, useState, useEffect } from 'react'
import Message from '../../components/Message/Message'
import CustomInput from '../../components/CustomInput/CustomInput'
import { useParams } from 'react-router-dom'
import WebsocketContext from '../App/WebsocketContext'
import './Chat.css'

const Chat = () => {
  let { roomId } = useParams()
  const WSContext = useContext(WebsocketContext)
  const [messages, setMessages] = useState([
    { coming: false, content: 'test' },
    { coming: true, content: 'testcoming' },
    { coming: false, content: 'testgoing2' },
  ])

  console.log('ROOM ID', roomId)

  return (
    <WSContext.Consumer>
      {() => {
        return (
          <div className="chatRoot">
            {/* <Message coming={false} content="message1" />
            <Message
              coming={false}
              content="a very long version of the prior short message 2"
            />
            <Message coming={true} content="message3" />
            <Message coming={false} content="message that is medium" />
            <Message coming={true} content="message5" /> */}
            {messages.map((message) => (
              <Message coming={message.coming} content={message.content} />
            ))}
            <CustomInput />
          </div>
        )
      }}
    </WSContext.Consumer>
  )
}

export default Chat
