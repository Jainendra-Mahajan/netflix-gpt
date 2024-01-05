import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ poster }) => {

    if (!poster) return null;
    return (
        <div className='w-36 md:w-48 pr-4 pt-3 md:h-72'>
            <img src={IMG_CDN_URL + poster} alt="Movie Card" className='rounded-lg' />
        </div>
    )
}

export default MovieCard