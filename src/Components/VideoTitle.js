import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='-ml-3 md:ml-0 aspect-video bg-gradient-to-r from-gray-950 px-9 pt-[30%] md:pt-[20%] absolute text-white'>
      <h1 className='text-lg md:text-3xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block text-lg w-1/3 py-3'>{overview}</p>

      <div className='mt-1'>
        <button className=' bg-white text-black p-1 md:p-3 px-4 rounded-lg md:px-7 hover:bg-opacity-80'>
          ▶️ Play</button>
        <button className='hidden md:inline-block bg-gray-500 text-white p-3 rounded-lg px-7 mx-3 bg-opacity-50'>
          More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;