import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import { selectUser } from "./features/userSlice"
import { useSelector } from 'react-redux';
import  db ,{ auth } from './Firebase';

function Sidebar() {

    const [channels, setChannels] = useState([])

    useEffect(() => {
        db.collection("channels").onSnapshot((snapshot)=>
        {
            setChannels(snapshot.docs.map(doc=>({
                id:doc.id,
                channel:doc.data()
            })))
        })
    }, [])

    const handleAddChannel = ()=>{
        const channelN = prompt("Enter Channel Name");
        if(channelN)
        {
            db.collection("channels").add({
                channelName:channelN
            })
        }
    }

    const handleClick = ()=>{
        auth.signOut();
    }

  const user = useSelector(selectUser);

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Discord</h3>
                <ExpandMoreIcon/>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon/>
                        <h4>Channels</h4>
                    </div>
                        <AddIcon onClick={handleAddChannel} className="sidebar__addChannel"/>
                </div>
                <div className="sidebar__channelList">
                   {
                        channels.map(({id,channel})=>{
                            console.log(id);
                            console.log(channel.channelName);
                            return <SidebarChannel key={id} id={id} channelName={channel.channelName}/>
                        })
                   }
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon     className="sidebar__voiceIcon"
                fontSize="large"
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon/>
                    <CallIcon/>
                </div>

            </div>


            <div className="sidebar__profile">
                <Avatar className="avatar__photo" onClick={handleClick} src={user.photo} />
                <div className="sidebar__profileInfo">
                    <h3>{user.name}</h3>
                    <p>#{user.uid.substring(0,5)}</p>
                </div>
                <div className="sidebar__profileIcons">
                    <MicIcon/>
                    <HeadsetMicOutlinedIcon/>
                    <SettingsIcon/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
