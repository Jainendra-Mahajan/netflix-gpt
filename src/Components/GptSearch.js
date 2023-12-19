import React from 'react'
import GptSearchPage from './GptSearchPage';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_IMAGE } from '../utils/constants';

const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img
                    src={BG_IMAGE}
                    alt="BG Image" />
            </div>
            <GptSearchPage />
            <GptMovieSuggestions />
        </div>
        //create gpt search page.
    )
}

export default GptSearch;