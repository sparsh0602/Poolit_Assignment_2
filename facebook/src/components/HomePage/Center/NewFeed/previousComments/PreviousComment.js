import { Avatar } from '@mui/material'
import React from 'react'
import './previousComment.css'
export default function PreviousComment({name,comment}) {
  return (
    <div className="previousComments">
        <Avatar style={{width:"20px",height:"20px",marginLeft:"30px",marginTop:"10px",marginBottom:"20px"}}/>
        <div className="previousCommentBar">
            <p className="commentName">{name}</p>
            <p className="comment">{comment}</p>
        </div>
    </div>
  )
}
