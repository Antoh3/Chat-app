import React from 'react'
import "../assets/css/messages.css"

export default function Message({ owner, msg, openImageViewer }) {
  return (
    <div className={owner ? 'message owner' : "message"}>
      <div className="message-wrapper">
        {msg?.images.length > 0 && (
          <div className="image-wrapper"
            onClick={() => openImageViewer(msg.images)}
          >
            <img src={msg?.images[0]} alt="" />
            {msg?.images.length > 1 &&
              <div className="image-count">+{msg?.images.length - 1}
              </div>}
          </div>
        )}
        <p>{msg?.message}</p>
      </div>
      <span className='timeline'>Just now</span>
    </div>
  )
}
