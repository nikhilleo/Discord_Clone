import React from 'react'
import "./Message.css"
import { Avatar } from '@material-ui/core'
function Message({user,message,timestamp}) {
    // console.log(user);
    // console.log(new Date(timestamp.toDate()).toUTCString()) ;
    return (
        <div className="message">
            <Avatar src={user?.photo} />
            
            <div className="message__info">
                <h4>{user?.name}
                    <span className="message__timestamp">{new Date(timestamp?.toDate()).toISOString}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
