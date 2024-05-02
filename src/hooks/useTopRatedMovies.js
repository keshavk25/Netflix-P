import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useTopRatedMovies = ()=>{

    const dispatch = useDispatch();
    const topRatedMoviesResult = useSelector((store) => store.movies.topRatedMovies);

    const topRatedMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS)
        const jsonData = await data.json();
        dispatch(addTopRatedMovies(jsonData))
    }

    useEffect(()=>{
        !topRatedMoviesResult && topRatedMovies();
    },[])
}

export default useTopRatedMovies;
