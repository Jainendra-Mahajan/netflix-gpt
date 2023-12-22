import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const upcomingMovies = useSelector(store => store.movie.upcomingMovies);
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        !upcomingMovies && getPopularMovies()
    }, []);
}

export default useUpcomingMovies;