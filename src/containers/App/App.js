import React, { createContext, useEffect } from 'react'
import Chat from '../Chat/Chat.js'
import SideMenu from '../SideMenu/Sidemenu.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { w3cwebsocket as W3CWebSocket } from 'websocket'
import './App.css'
import WebsocketContext from './WebsocketContext'

const App = () => {
  const client = new W3CWebSocket('ws://localhost:8080')
  const WSContext = createContext()

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected')
    }

    client.onmessage = (message) => {
      console.log(message)
    }
  }, [])

  return (
    <div className="appRoot">
      <SideMenu />
      <WebsocketContext.Provider value={WSContext}>
        <Router>
          <Routes>
            <Route path="room/:roomId" element={<Chat />}></Route>
          </Routes>
        </Router>
      </WebsocketContext.Provider>
    </div>
  )
}

export default App
