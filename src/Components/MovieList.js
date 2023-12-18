import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {

    return (
        <div className='px-4 pt-3'>
            <h1 className='text-2xl text-white'>{title} </h1>
            <div className='flex overflow-x-scroll'>

                <div className='flex '>
                    {movies?.map((movie) => <MovieCard key={movie.id} poster={movie?.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList