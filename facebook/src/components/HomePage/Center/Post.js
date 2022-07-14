import React from 'react'
import StoryReel from './StoryReel/StoryReel'
import MessageSender from './MessageSender/MessageSender'
import NewFeed from './NewFeed/NewFeed'
import { useEffect } from 'react'
import './post.css'
export default function Post({data}) {
  return (
    <div>
      <div className="feed desktop">
        <MessageSender name={data.obj.val.name} id={data.obj.val.id} feeds={data.obj.val.feed} fun={data.obj.fun}/>
        <StoryReel />
        { data.obj.val.feed?.map((val,idx)=>{
          return <div key={idx}><NewFeed idx={idx} name={data.obj.val.name} data={val.feedData} date={val.feedDate} month={val.feedMonth} time={val.feedTime} id={data.obj.val.id} feeds={data.obj.val.feed} comments={data.obj.val.comments}/></div>
        })
}
      </div>
     
    </div>
  )
}
