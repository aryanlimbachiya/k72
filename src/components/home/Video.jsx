import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='object-cover h-full w-full' autoPlay loop muted src="../../../video.mp4"></video>
    </div>
  )
}

export default Video
