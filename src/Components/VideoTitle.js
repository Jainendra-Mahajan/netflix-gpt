import React from 'react';

const VideoTitle = ({title , overview }) => {
  return (
    <div className='aspect-video bg-gradient-to-r from-gray-950 px-16 pt-[25%] absolute text-white'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='text-lg w-1/3 py-3'>{overview}</p>

        <div className='my-3'>
            <button className='bg-white text-black p-3 rounded-lg px-7 text-sm hover:bg-opacity-80'>
                ▶️ Play Now</button>
            <button className='bg-gray-500 text-white p-3 rounded-lg px-7 mx-3 text-sm bg-opacity-50'> 
                More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;