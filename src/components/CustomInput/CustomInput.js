import React, { useState } from 'react'
import './CustomInput.css'

const CustomInput = (props) => {
  const [value, setValue] = useState('')
  const addMessage = props.addMessage

  function handleSubmit(e) {
    console.log('EVENT', e)
    if (e.key === 'Enter') {
      e.stopPropagation()
      addMessage({ coming: false, content: e.target.value })
    }
  }
  function handleChange(e) {
    setValue(e.target.value)
    console.log('EVENT', e.target.value)
  }
  return (
    <div className="customInputRoot">
      <form onSubmit={handleSubmit}>
        <textarea
          className="customInput"
          type="textarea"
          name="textValue"
          value={value}
          rows={4}
          onChange={handleChange}
        />
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default CustomInput
