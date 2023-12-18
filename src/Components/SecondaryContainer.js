import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movie.nowPlayingMovies);
  const popularMovies = useSelector(store => store.movie.popularMovies)
  const topRatedMovies = useSelector(store => store.movie.topRatedMovies)
  const upcomingMovies = useSelector(store => store.movie.upcomingMovies);

  if (!movies) return;
  return (
    movies && <div className='bg-black'>
      <div className="-mt-40 pl-5 relative z-20">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Upcoming"} movies={upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer;