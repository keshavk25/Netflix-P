import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";
import { useDispatch, useSelector} from "react-redux";

const usePopularMovies =()=>{
    
    const dispatch = useDispatch();
    const popularMoviesResult = useSelector((store) => store.movies.popularMovies);


    const popularMovies=async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS);
        const jsonData = await data.json();
            dispatch(addPopularMovies(jsonData))
        }

    useEffect( ()=>{
        !popularMoviesResult && popularMovies();
    },[])

}

export default usePopularMovies;