import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PeopleIcon from '@mui/icons-material/People';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
export default function header(props) {
    return (
        <div className="headerContainer">
            <div className="header">
                <div className="header_left">

                    <img src="https://www.facebook.com/images/fb_icon_325x325.png" />

                    <div className="header_search">
                        <SearchIcon />
                        <input type="text" placeholder="Search Facebook" />
                    </div>
                </div>

                {/* ///////////////////////////////////////////////////////////// */}
                <div className="header_middle">
                    <div className="header_option header_option--active">
                        <HomeIcon fontSize="large" />
                    </div>
                    <div className="header_option">
                        <OndemandVideoIcon fontSize="large" />
                    </div>
                    <div className="header_option">
                        <GroupIcon fontSize="large" />
                    </div>
                    <div className="header_option">
                        <SportsEsportsIcon fontSize="large" />
                    </div>

                </div>

                {/* /////////////////////////////////////////////////////////// */}
                <div className="header_right">
                    <div className="header_info dropdown">
                        <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <Avatar/>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Settings & privacy</a></li>
                            <li><a class="dropdown-item" href="#">Help & Support</a></li>
                            <li><a class="dropdown-item" href="#">Give feedback</a></li>
                            <li><Link class="dropdown-item" to="/">Log Out</Link></li>
                        </ul>
                        <h5>{props.name.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ')}</h5>
                    </div>

                    <IconButton>
                        <AppsIcon />
                    </IconButton>

                    <IconButton>
                        <ForumIcon />
                    </IconButton>

                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>

                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>

                </div>



                <div className="header_mobile">
                    <Avatar style={{ width: "27px", height: "27px", marginTop: "5px", marginLeft: "15px" }} />
                    <div className="header_search">
                        <SearchIcon style={{ color: "white" }} />
                        <input type="text" placeholder="Search Facebook" />
                        <ChatIcon style={{ color: "white" }} />
                    </div>
                </div>

            </div>
            <div className="header_mobile2">
                <HomeIcon style={{ height: "40px", width: "30px", marginLeft: "20px" }} />
                <PeopleIcon style={{ height: "40px", width: "30px" }} />
                <HomeMaxIcon style={{ height: "40px", width: "30px" }} />
                <LiveTvIcon style={{ height: "40px", width: "30px" }} />
                <NotificationsIcon style={{ height: "40px", width: "30px" }} />
                
                <div className="dropdown dropdown2">
                <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <ExpandMoreIcon style={{ height: "40px", width: "30px", marginRight: "20px" }} />
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Settings & privacy</a></li>
                            <li><a class="dropdown-item" href="#">Help & Support</a></li>
                            <li><a class="dropdown-item" href="#">Give feedback</a></li>
                            <li><Link class="dropdown-item" to="/">Log Out</Link></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}
