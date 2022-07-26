import * as ReactDOMClient from 'react-dom/client'
import React from 'react'
import App from './containers/App/App.js'

const container = document.getElementById('app')

const root = ReactDOMClient.createRoot(container)

root.render(<App />)
