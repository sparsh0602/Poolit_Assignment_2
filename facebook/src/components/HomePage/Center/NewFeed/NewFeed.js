import { Avatar, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import './newFeed.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from "react-router-dom";
import PreviousComment from './previousComments/PreviousComment';
import { useEffect } from 'react';
import axios from 'axios';
export default function NewFeed({ idx, name, data, date, month, time, mentioned, place, id, feeds, comments }) {
    
   
    const [likeCount, setlikeCount] = useState(0)
    const [checkLikeClick, setcheckLikeClick] = useState(false)
    const [newfeed, setnewfeed] = useState({ feed: feeds });
    const [commentSection, setcommentSection] = useState(false)
    const [value, setvalue] = useState("")
    const [commentData, setcommentData] = useState({ name: "", comment: "" ,index:""})
    const [newcomment, setcomment] = useState({ comments: comments });
    const [editData, seteditData] = useState(data)
   
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const navigate = useNavigate();
    const [newFeed_Data, setnewFeed_Data] = useState({
        feedData:data,
        feedDate:"",
        feedMonth:"",
        feedTime:""
    })
    const handleLikeButton = () => {

        if (checkLikeClick == false) {
            setlikeCount(likeCount + 1);
            setcheckLikeClick(true)
        }
        else {
            setlikeCount(likeCount - 1);
            setcheckLikeClick(false);

        }
    }
    const handleDeletePost = async () => {
        feeds.splice(idx, 1);
        setnewfeed({ feed: feeds });
        await axios
            .patch(`http://localhost:4000/posts/${id}`, newfeed)

        let obj2 = {};
        await axios
            .get(`http://localhost:4000/posts/${id}`)
            .then((res) => { obj2 = res.data; });

        let obj = {
            val: obj2
        }
        setcommentData({ name: "", comment: "" });
        navigate("/home", { state: { obj } })
    }

    const handleEditPost = () => {
        let dox=document.getElementsByClassName(`newFeed_content${idx}`)[0];
        dox.style.display="none"
        let dox2=document.getElementsByClassName(`newFeed_edit_container${idx}`)[0];
            dox2.style.display="block"
    }

    const handleCommentClick = () => {
        if (commentSection == false) {
            document.getElementById('commentSection').style.display = "flex"
            setcommentSection(true);
        }
        else {
            document.getElementById('commentSection').style.display = "none"
            setcommentSection(false);
        }
    }

    const handleKeypress = async (e) => {

        if (e.key === 'Enter') {
            comments.push(commentData);
            setcomment({ comments: comments })
            await axios
                .patch(`http://localhost:4000/posts/${id}`, newcomment)

            let obj2 = {};
            await axios
                .get(`http://localhost:4000/posts/${id}`)
                .then((res) => { obj2 = res.data; });

            let obj = {
                val: obj2
            }

            setcommentData({name:"",comments:"",idx:""})
            navigate("/home", { state: { obj } })
        }
    }
    const editFeedData=(e)=>{
        setnewFeed_Data({
            feedData:e.target.value,
            feedDate:new Date().toISOString().slice(9, 10),
            feedMonth:monthName[new Date().getMonth()],
            feedTime:new Date().toLocaleTimeString().slice(0,5)
        })

        
}

const handleDelete=()=>{
    let dox=document.getElementsByClassName(`newFeed_content${idx}`)[0];
    dox.style.display="none"
    let dox2=document.getElementsByClassName(`newFeed_edit_container${idx}`)[0];
        dox2.style.display="none"
    let dox3=document.getElementsByClassName(`newFeed_delete_container newFeed_delete_container${idx}`)[0];
        dox3.style.display="block"

}

const handleCancelDelete=()=>{
    let dox=document.getElementsByClassName(`newFeed_content${idx}`)[0];
    dox.style.display="flex"
    let dox2=document.getElementsByClassName(`newFeed_edit_container${idx}`)[0];
        dox2.style.display="none"
    let dox3=document.getElementsByClassName(`newFeed_delete_container newFeed_delete_container${idx}`)[0];
        dox3.style.display="none"
}
    const handleEditKeypress=async(e)=>{
        if (e.key === 'Enter') {
            feeds.splice(idx, 1);
            feeds.splice(idx,0,newFeed_Data);
            
            setnewfeed({feed:feeds})
            await axios
                .patch(`http://localhost:4000/posts/${id}`, newfeed)

            let obj2 = {};
            await axios
                .get(`http://localhost:4000/posts/${id}`)
                .then((res) => { obj2 = res.data; });

            let obj = {
                val: obj2
            }
            
            let dox=document.getElementsByClassName(`newFeed_content${idx}`)[0];
            dox.style.display="flex"
            let dox2=document.getElementsByClassName(`newFeed_edit_container${idx}`)[0];
            dox2.style.display="none"
            navigate("/home", { state: { obj } })
        }
    }



    return (

        <div className="newFeed">
            <div className="newFeed_inner_container_1">
                <div className="newFeed_info">
                    <div className="newFeed_info_inner_container">
                        <div className="newFeed_avatar"><Avatar /></div>
                        <p>{name.split(' ')[0].split(' ').map(i => i[0].toUpperCase() + i.substring(1).toLowerCase()).join(' ')}</p> &nbsp; <span>{mentioned && ` is with ${mentioned}`}{place && ` at ${place}`}</span>
                        <div className="newFeed_time">{month} {date} at {time}</div>

                        <div className="dropdown newFeed_dropdown_container" >
                            <button className="newFeed_dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <MoreHorizIcon />
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><button className="dropdown-item" onClick={handleDelete}>Delete</button></li>
                                <li><button className="dropdown-item" onClick={handleEditPost}>Edit</button></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`newFeed_content newFeed_content${idx}`}>
                    <p>{data}</p>
                </div>

                <div className={`newFeed_edit_container newFeed_edit_container${idx}`}>
                    <input type="text" className="newFeed_input" value={editData} value={newFeed_Data.feedData} onChange={(e)=>{editFeedData(e)}} onKeyPress={handleEditKeypress}/>
                </div>

                <div className={`newFeed_delete_container newFeed_delete_container${idx}`}>
                    <p className="delete_feed_info">Do you really wanted to delete this post</p> 
                    <Button className="delete_feed_button" onClick={handleDeletePost}>Delete</Button>
                    <Button className="cancel_delete_feed_button" onClick={handleCancelDelete}>Cancel</Button>
                </div>

                <div className="newFeed_like_count">
                    <ThumbUpIcon style={{ color: "#2381fa", marginLeft: "20px", marginTop: "18px" }} />
                    <p>{likeCount}</p>
                </div>

                <div className="newFeed_like_count_options">
                    <button className="action-button" onClick={handleLikeButton}>
                        <div className="newFeed_like_count_option option1">
                            <ThumbUpIcon style={{ color: "gray" }} />
                            <span>like</span>
                        </div>
                    </button>

                    <button className="action-button " onClick={handleCommentClick}>
                        <div className="newFeed_like_count_option option2">
                            <ChatBubbleIcon style={{ color: "gray" }} />
                            <span>comment</span>
                        </div>
                    </button>

                    <button className="action-button">
                        <div className="newFeed_like_count_option option3">
                            <SendIcon style={{ color: "gray" }} />
                            <span>share</span>
                        </div>
                    </button>
                </div>

                <div className="commentSection" id="commentSection">
                    <div className="commentSection_commentBox">
                        <Avatar style={{ marginRight: "10px" }} />
                        <input type="text" className="commentSection_input" placeholder="Write a comment..." onChange={(e) => setcommentData({ name: name, comment: e.target.value,index:idx})} value={commentData.comments} onKeyPress={handleKeypress} />
                    </div>
                    <div className="allPreviousComment">
                        {comments?.map((val, idx) => {
                            return <div key={idx}><PreviousComment name={val.name} comment={val.comment} /></div>
                        })
                        }
                    </div>

                    <div className="blankSpace">
                    </div>

                </div>
            </div>
        </div>
    )
}
