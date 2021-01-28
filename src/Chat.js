import React from 'react'
import ChatHeader from "./ChatHeader";
import "./Chat.css"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import {selectChannelId,selectChannelName} from "./features/appSlice"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';



function Chat() {
    const user = useSelector(selectUser);
    const channelName = useSelector(selectChannelName);
    const channelId = useSelector(selectChannelId);
    return (
        <div className="chat"> 
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize="large"/>
                <form >
                    <input placeholder={`Message #${channelName}`}/>
                    <button className="chat__inputButton" type="submit">Send Message</button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large"/>
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

export default Chat
