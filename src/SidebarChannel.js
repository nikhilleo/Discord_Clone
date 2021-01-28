import React from 'react'
import { useDispatch } from 'react-redux';
import "./SidebarChannel.css"
import { setChannelInfo } from "./features/appSlice"

function SidebarChannel({id,channelName}) {

    const handleChange = ()=>{
        dispatch(setChannelInfo({
            channelId : id,
            channelName : channelName
        }))
    }

    const dispatch = useDispatch();

    console.log(channelName);
    return (
        <div className="sidebarChannel" onClick={handleChange}>
            <h4>
                <span className="sidebarChannel__hash ">#</span>{channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
