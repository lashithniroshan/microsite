import React from 'react'
import data from '../data/data.json'

export const VideoBackground = () => {
  return (
    <div className='fixed inset-0 z-0'>
      <div className='bg-white/50 inset-0 absolute z-10' />
      <video
        src={data.video}
        className='w-screen h-screen object-cover'
        autoPlay
        muted
        loop
      />
    </div>
  )
}
