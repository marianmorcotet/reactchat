import React, { useEffect } from 'react'
import Message from '../../components/Message/Message'
import CustomInput from '../../components/CustomInput/CustomInput'
import { useParams } from 'react-router-dom'
import { w3cwebsocket as W3CWebSocket } from 'websocket'
import './Chat.css'

const Chat = () => {
  let { roomId } = useParams()
  const client = new W3CWebSocket('wss://127.0.0.0:4001/websockets')
  console.log('ROOM ID', roomId)

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected')
    }

    client.onmessage = (message) => {
      console.log(message)
    }
  }, [])

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
