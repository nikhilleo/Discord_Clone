import React from 'react'
import "./ChatHeader.css"
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationSharpIcon from '@material-ui/icons/EditLocationSharp';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    YouTube
                </h3>
            </div>
            
            <div className="chatHeader__right">
                <NotificationsIcon/>
                <EditLocationSharpIcon/>
                <PeopleAltIcon/>

                <div className="chatHeader__search">
                    <input type="text" placeholder="Search"/>
                    <SearchIcon/>
                </div>
                <SendRoundedIcon/>
                <HelpRoundedIcon/>
            </div>
        </div>
    )
}

export default ChatHeader
