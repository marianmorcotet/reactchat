import React from 'react'
import Chat from '../Chat/Chat.js'
import SideMenu from '../SideMenu/Sidemenu.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div className="appRoot">
      <SideMenu />
      <Router>
        <Routes>
          <Route path="room/:roomId" element={<Chat />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
