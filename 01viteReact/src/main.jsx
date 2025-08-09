import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target:'blank'},
    'click me to visit google',
    anotherUser
)


// rendering from react 
createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
