import React, { useRef } from 'react'
import lang from "../utils/languageConstants"
import { useDispatch, useSelector } from 'react-redux'
import openai from './opneai';
import { API_OPTIONS } from '../utils/constants';
import { addSearchMovies } from '../utils/gptSlice';


const GptSearchPage = () => {

    const searchText = useRef();
    const dispatch = useDispatch();

    const searchTMDBMovies = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {

        const gptQuery =
            "Act as a Movie Recommendation system and suggest some movies for the query : " +
            searchText.current.value +
            ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        //Storing all gpt results to an array.
        const gptMoviesArray = (gptResults.choices?.[0]?.message?.content).split(",");

        //promise array will be created after the API is called for each movie.
        const promiseArray = gptMoviesArray.map((movie) => searchTMDBMovies(movie));

        //resolve all the promises generated above
        const tmdbMovies = await Promise.all(promiseArray);

        //add movies to the store
        dispatch(
            addSearchMovies({ movieNames: gptMoviesArray, movieResults: tmdbMovies }));
    }

    const currentLanguage = useSelector(store => store.lang.currentLanguage);
    return (
        <div className='pt-[40%] md:pt-[10%] flex justify-center'>
            <form className='rounded-md w-[95%] pr-2 md:pr-0 md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input className='p-3 m-4 rounded-md col-span-9 text-xs md:text-lg'
                    ref={searchText}
                    type="text" placeholder={lang[currentLanguage].gptSearchPlaceHolder} />
                <button className='py-0 px-4 m-4 md:mx-4 mx-2 bg-red-600 text-white rounded-md col-span-3 text-xs md:text-lg'
                    onClick={handleGptSearchClick}>
                    {lang[currentLanguage].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchPage