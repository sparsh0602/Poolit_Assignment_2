import React from 'react'
import './rightSideBar.css'
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { Avatar } from '@mui/material';
export default function RightSideBar() {
  return (
    <div className="widget">
      <div className="widget_header">
        <p>Contacts</p>
        <div className="widget_header_option">
        <VideoCallIcon style={{marginLeft:"10px",cursor:"pointer"}}/>
        <SearchIcon style={{marginLeft:"10px",cursor:"pointer"}}/>
        <MoreHorizIcon style={{marginLeft:"10px",cursor:"pointer"}}/>
        </div>
      </div>
      <div className="friend">
      </div>
    </div>
  )
}
