import React from 'react'
import './messageSender.css'
import { Avatar, Button } from '@mui/material'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GifIcon from '@mui/icons-material/Gif';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function MessageSender({ name,id ,feeds,fun}) {
    const [newFeed_Data, setnewFeed_Data] = useState({
        feedData:"",
        feedDate:"",
        feedMonth:"",
        feedTime:""
    })
    const navigate = useNavigate();
    const [data, setdata] = useState({});
    const [feed, setfeed] = useState({fed:feeds});
    const [newfeed, setnewfeed] = useState({feed:feeds});
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const handlePost=async()=>{

        feeds.push(newFeed_Data)
        setnewfeed({feed:feeds})
        console.log(newfeed);
        await axios
        .patch(`http://localhost:4000/posts/${id}`,newfeed)
        

        
        let obj2={};
        await axios
        .get(`http://localhost:4000/posts/${id}`)
        .then((res) => { obj2=res.data;});

        let obj={
            val:obj2
        }

        navigate("/home", { state:{obj}})

    }
    
    const addFeedData=(e)=>{
        setnewFeed_Data({
            feedData:e.target.value,
            feedDate:new Date().toISOString().slice(9, 10),
            feedMonth:month[new Date().getMonth()],
            feedTime:new Date().toLocaleTimeString().slice(0,5),
        }) 
  
        
    }
    
    return (
        <div className="messageSender_Container">
            <div className="messageSender">
                <Avatar/>
                <button type="button" className="btn btn-primary messageSender_button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    What's on your mind, {name.split(' ')[0].split(' ').map(i => i[0].toUpperCase() + i.substring(1).toLowerCase()).join(' ')}?
                </button>

                <div className="modal fade modal_popup" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel" className="messageSender_title">Create post</h5>
                                <button type="button" className="btn-close messageSender_close_button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body modal_body">
                                <div className="modal_body_title">
                                    <Avatar/>
                                    <p>{name.split(' ')[0].split(' ').map(i => i[0].toUpperCase() + i.substring(1).toLowerCase()).join(' ')}</p>
                                </div>

                                <div className="text_area">
                                    <textarea className="modal_body_textArea" placeholder={`What's on your mind, ${name.split(' ')[0].split(' ').map(i => i[0].toUpperCase() + i.substring(1).toLowerCase()).join(' ')} ?`} value={newFeed_Data.feedData} onChange={(e)=>{addFeedData(e)}}>

                                    </textarea>
                                </div>

                                <div className="addPost">
                                    <Button className="addPost_button" onClick={handlePost}>Add to your post</Button>
                                    <div className="addPost_options">
                                    <PhotoLibraryIcon style={{ color: "#45BD62" }}/>
                                    <PersonIcon style={{color:"#4267B2"}}/>
                                    <SentimentSatisfiedAltIcon style={{ color: "#F7B928" }}/>
                                    <LocationOnIcon style={{color:"#F3425F"}}/>
                                    <GifIcon style={{color:"#F3425F"}}/>
                                    <MoreHorizIcon/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary addPost_footer_post_button" id="postButton" onClick={handlePost} data-bs-dismiss="modal">Post</button>
                            </div>
                        </div>
                    </div>
                </div>

                </div>

                <div className="messageSender_options">
                    <div className="messageSender_option">
                        <VideoCameraFrontIcon style={{ color: "#F3425F" }}/>
                        <p>Live Video</p>
                    </div>

                    <div className="messageSender_option">
                        <PhotoLibraryIcon style={{ color: "#45BD62" }}/>
                        <p>Photo/Video</p>
                    </div>

                    <div className="messageSender_option">
                        <SentimentSatisfiedAltIcon style={{ color: "#F7B928" }}/>
                        <p>Feeling/Activity</p>
                    </div>
                
            </div>
        </div>
    )
}
