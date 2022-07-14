import { Avatar } from '@mui/material'
import React from 'react'
import './sideBarOptions.css'

export default function SideBarOptions({ src, Icon, title }) {
  return (
    <div
      className="sideBarRow">

      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <p>{title.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ')}</p>
    </div>
  )
}
