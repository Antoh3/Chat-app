import React from 'react'
import Avatar from './Avatar'

export default function ChatItem({setChat}) {
  return (
    <div className='chat-item' onClick={() => setChat(true)}>
     <Avatar src="" height={55} width={55} />
     <div className="chat-item-info">
        <div className="avatar-info">
            <span className="username">Emmanuel</span>
            <span className="timeline">2 days ago</span>
        </div>
        <p className="last-message">Say hello to Emmanuel</p>
     </div>
    </div>
  )
}
