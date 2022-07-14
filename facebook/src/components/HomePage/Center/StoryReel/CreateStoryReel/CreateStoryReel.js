import { Avatar } from '@mui/material'
import React from 'react'
import './createStoryReel.css'
export default function CreateStoryReel({src,name}) {
  return (
    <div>
        <div className="story" style={{backgroundImage:`url(${src})`}}>
            <Avatar/>
            <h4>{name}</h4>
        </div>
    </div>
  )
}
