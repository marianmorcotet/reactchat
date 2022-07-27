import React from 'react'
import './Message.css'

const Message = (props) => {
  return (
    <div className="messageRoot">
      <div className={props.class}>{props.content}</div>
    </div>
  )
}

export default Message
