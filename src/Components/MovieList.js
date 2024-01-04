import React from 'react'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
const MovieList = ({ title, movies }) => {

    return (
        <div className='px-4 pt-3'>
            <h1 className='text-xl md:text-2xl text-white'>{title} </h1>
            <div className='flex overflow-x-scroll'>

                <div className='flex cursor-pointer'>
                    {movies?.map((movie) => <Link to={"/watch?v=" + movie.id} key={movie.id}><MovieCard poster={movie?.poster_path} /></Link>)}
                </div>
            </div>
        </div>
    )
}

export default MovieList