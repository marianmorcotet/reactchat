import React, { useState } from 'react'
import './CustomInput.css'

const CustomInput = () => {
  const [value, setValue] = useState('')

  function handleSubmit() {
    console.log()
  }
  function handleChange(e) {
    setValue(e.target.value)
    console.log('EVENT', e.target.value)
  }
  return (
    <div className="customInputRoot">
      <textarea
        className="customInput"
        type="textarea"
        name="textValue"
        value={value}
        rows={4}
        onChange={handleChange}
      />
    </div>
  )
}

export default CustomInput
