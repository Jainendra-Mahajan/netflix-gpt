import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { API_OPTIONS } from '../utils/constants';

const Watch = () => {


    const [searchParams] = useSearchParams();
    const [trailer, setTrailer] = useState("");
    const dispatch = useDispatch();
    const id = searchParams.get("v");

    const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        setTrailer(json?.results[0]);
    }

    useEffect(() => {
        getMovieVideo();
    }, []);

    return (
        <>
            <div className='w-screen'>
                <iframe className="w-screen aspect-video"
                    src={"https://www.youtube.com/embed/" + trailer.key + "?&autoplay=1"}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen ></iframe>
            </div>
        </>
    )
}

export default Watch