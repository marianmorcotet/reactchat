import * as ReactDOMClient from 'react-dom/client'
import React from 'react'
const App = () => {
  return <h1>This is my React app!</h1>
}

const container = document.getElementById('app')

const root = ReactDOMClient.createRoot(container)

root.render(<App/>);
// console.log("TEST")
