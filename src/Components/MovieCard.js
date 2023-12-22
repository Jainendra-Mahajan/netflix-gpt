import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ poster }) => {

    if (!poster) return null;
    return (
        <div className='w-24 md:w-36 pr-4 pt-3'>
            <img src={IMG_CDN_URL + poster} alt="Movie Card" />
        </div>
    )
}

export default MovieCard