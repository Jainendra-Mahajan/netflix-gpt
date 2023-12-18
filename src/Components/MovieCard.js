import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ poster }) => {
    return (
        <div className='w-36 pr-4 pt-3'>
            <img src={IMG_CDN_URL + poster} alt="Movie Card" />
        </div>
    )
}

export default MovieCard