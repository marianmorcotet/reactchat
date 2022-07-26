import React from 'react'
import './Message.css'

const Message = (props) => {
  return (
    <div className="messageRoot">
      <div
        className={
          'basicMessage ' + (props.coming ? 'comingMessage' : 'ownerMessage')
        }
      >
        {props.content}
      </div>
    </div>
  )
}

export default Message
