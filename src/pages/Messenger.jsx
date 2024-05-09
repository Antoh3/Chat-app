import React, { useState } from 'react'
import "../assets/css/messenger.css"
import "../components/Content"
import "../components/Sidebar"
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'


export default function Messenger() {
  const [chat, setChat] = useState(false);

  return (
    <div className='messenger'>
      <Sidebar
        setChat={setChat}
      />
      <Content 
        chat={chat}
        setChat={setChat}
      />

    </div>
  )
}


