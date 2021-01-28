import React, { useEffect, useState } from 'react'
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
import  db  from "./Firebase"
import firebase from "firebase"

function Chat() {

    const scrBottom = ()=>{
        console.log("SCROLL TOP")
        const doc = document.getElementsByClassName("chat__messages");
        doc[0].scrollTop = doc[0].scrollHeight;
    }

    const [input,setInput] = useState("")
    const [messages, setMessages] = useState([])
    const user = useSelector(selectUser);
    const channelName = useSelector(selectChannelName);
    const channelId = useSelector(selectChannelId);

    useEffect(() => {
        if(channelId)
        {
            db.collection('channels').doc(channelId).collection("messages").orderBy("timestamp","asc").onSnapshot(snapshot=>(
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
            scrBottom();
        }
    }, [channelId])


    const sendMessage = (e)=>{
        e.preventDefault();
        db.collection("channels").doc(channelId).collection("messages").add({
            message:input,
            user:user,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    }

    return (
        <div className="chat"> 
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {messages.map(({message,user,timestamp})=>(
                    <Message message={message} timestamp={timestamp} user={user}/>
                ))}
            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize="large"/>
                <form >
                    <input value={input}
                        disabled={!channelId} 
                        onChange={(e)=> setInput(e.target.value)} 
                        placeholder={`Message #${channelName}`}
                    />
                    <button onClick={sendMessage} className="chat__inputButton" type="submit">Send Message</button>
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
