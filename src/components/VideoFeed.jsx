import React from 'react'
import YouTube from './YoutubeFeed'

const VideoFeed = ({videos}) => {
  return (
    <div>
        <YouTube videosList={videos} />
    </div>
  )
}

export default VideoFeed