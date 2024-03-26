// import React from 'react'
import video from "/public/about blank video.mp4"
function VideoEffect() {
  return (
    <div>
    <div className="w-[332px] h-[240px] overflow-hidden">
        <video autoPlay muted loop id="videoeEffect">
        <source src={video} type="video/mp4" />
        </video>
    </div>
    <p className="font-Truculenta font-semibold text-xl text-left">shot</p>
    </div>
    
  )
}

export default VideoEffect