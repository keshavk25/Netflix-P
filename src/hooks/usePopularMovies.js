import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const usePopularMovies =()=>{
    
    const dispatch = useDispatch();

    const popularMovies=async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS);
        const jsonData = await data.json();
            dispatch(addPopularMovies(jsonData))
        }

    useEffect( ()=>{
        popularMovies();
    },[])

}

export default usePopularMovies;