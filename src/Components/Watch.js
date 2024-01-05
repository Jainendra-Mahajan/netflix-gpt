import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { API_OPTIONS, LOGO, SUPPORTED_LANGUAGES, USER_LOGO } from '../utils/constants';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';

const Watch = () => {
    const [searchParams] = useSearchParams();
    const [trailer, setTrailer] = useState("");
    const dispatch = useDispatch();
    const id = searchParams.get("v");
    const navigate = useNavigate();
    const handleSignOut = () => {

        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            navigate("/error")
        });

    }

    const hadleHomeClick = () => {
        navigate("/browse")
    }


    const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        setTrailer(json?.results[0]);
    }

    useEffect(() => {
        getMovieVideo();
    }, []);

    return (
        <div className='bg-black h-full'>
            <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-50 flex flex-row justify-between'>
                <img className='-ml-5 md:ml-0 w-[40%] md:w-48 mx-0'
                    src={LOGO}
                    alt="logo" />

                {<div className='flex p-4 justify-between'>

                    <button onClick={hadleHomeClick}
                        className='pb-1 pt-1 md:pb-0 md:pt-0 text-xs md:text-lg px-1 md:px-3 bg-gray-900 text-white rounded-lg md:mr-5 mb-3'>
                        Home
                    </button>

                    <img
                        className='hidden md:block w-10 h-10'
                        src={USER_LOGO} alt="User Icon" />

                    <button onClick={handleSignOut} className='md:inline-block hidden  -mr-10 -mt-1 md:mr-0 text-xs md:text-lg text-white pl-5 pb-2'>(Sign Out)</button>
                </div>}
            </div>



            <div className=''>
                <iframe className="w-screen h-full aspect-video"
                    src={"https://www.youtube.com/embed/" + trailer.key + "?&autoplay=1"}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen ></iframe>
            </div>

        </div>
    )
}

export default Watch