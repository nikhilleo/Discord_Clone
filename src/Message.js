import React from 'react'
import "./Message.css"
import { Avatar } from '@material-ui/core'
function Message() {
    return (
        <div className="message">
            <Avatar src="https://c4.wallpaperflare.com/wallpaper/653/7/663/soccer-lionel-messi-fc-barcelona-hd-wallpaper-preview.jpg" />
            
            <div className="message__info">
                <h4>nikhilleo
                    <span className="message__timestamp">This Is A TimeStamp</span>
                </h4>
                <p>This Is My Message</p>
            </div>
        </div>
    )
}

export default Message
