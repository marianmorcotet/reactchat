import React from 'react'
import Chat from '../Chat/Chat.js'
import SideMenu from '../SideMenu/Sidemenu.js'
import './App.css'

const App = () => {
  return (
    <div className="appRoot">
      <SideMenu />
      <Chat />
    </div>
  )
}

export default App
