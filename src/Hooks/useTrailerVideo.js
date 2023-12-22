import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from '../utils/constants'
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (id) => {
    const trailerVideo = useSelector(store => store.movie.trailer);
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US", API_OPTIONS);
        const json = await data.json();

        const filterData = json.results.filter((video) => video?.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailer(trailer));
    }
    useEffect(() => {
        !trailerVideo && getMovieVideo();
    }, []);

}

export default useTrailerVideo;