import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const PrimaryContainer = () => {

  const movies = useSelector(store => store.movie?.nowPlayingMovies);

  if (!movies) return;

  const movie = movies[2];
  const { title, overview, id } = movie;

  return (
    <div className='pt-[20%] bg-black md:pt-0'>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  )
}

export default PrimaryContainer